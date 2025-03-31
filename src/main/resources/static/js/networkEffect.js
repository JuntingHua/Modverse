class NetworkEffect {
    constructor() {
        this.canvas = document.getElementById('networkCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.particles = [];
        this.mouse = { x: this.width / 2, y: this.height / 2, radius: 200 };
        this.particleCount = 100;
        this.colors = {
            particles: 'rgba(255, 255, 255, 0.5)',
            lines: 'rgba(255, 255, 255, 0.15)',
            glow: 'rgba(255, 255, 255, 0.05)'
        };

        this.init();
        this.setupEventListeners();
        this.animate();
    }

    init() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        // Create particles
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: Math.random() * 2 + 1,
                baseX: Math.random() * this.width,
                baseY: Math.random() * this.height,
                density: Math.random() * 30 + 1,
                velocity: {
                    x: (Math.random() - 0.5) * 0.2,
                    y: (Math.random() - 0.5) * 0.2
                }
            });
        }
    }

    setupEventListeners() {
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.init();
        });
    }

    connect() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;

                if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.5;
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    update() {
        for (let particle of this.particles) {
            // Mouse repulsion
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const repulsionRadius = this.mouse.radius;

            if (distance < repulsionRadius) {
                const force = (repulsionRadius - distance) / repulsionRadius;
                const angle = Math.atan2(dy, dx);
                particle.x -= Math.cos(angle) * force * 5;
                particle.y -= Math.sin(angle) * force * 5;
            }

            // Return to base position
            const baseDistance = {
                x: particle.baseX - particle.x,
                y: particle.baseY - particle.y
            };

            particle.x += baseDistance.x * 0.05;
            particle.y += baseDistance.y * 0.05;

            // Add some natural movement
            particle.x += particle.velocity.x;
            particle.y += particle.velocity.y;

            // Bounce off edges
            if (particle.x < 0 || particle.x > this.width) particle.velocity.x *= -1;
            if (particle.y < 0 || particle.y > this.height) particle.velocity.y *= -1;
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Draw connections
        this.connect();

        // Draw particles
        for (let particle of this.particles) {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = this.colors.particles;
            this.ctx.fill();
        }

        // Draw mouse glow
        const gradient = this.ctx.createRadialGradient(
            this.mouse.x, this.mouse.y, 0,
            this.mouse.x, this.mouse.y, this.mouse.radius
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when the window loads
window.addEventListener('load', () => {
    new NetworkEffect();
}); 