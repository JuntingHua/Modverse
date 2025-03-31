class WaterEffect {
    constructor() {
        this.canvas = document.getElementById('waterCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.lastMouse = { x: this.width / 2, y: this.height / 2 };
        this.mouseForce = 0;
        this.isMouseDown = false;
        this.points = [];
        this.numPoints = 100;
        this.pointSpacing = this.width / (this.numPoints - 1);
        this.baseHeight = this.height * 0.5;
        
        this.init();
        this.setupEventListeners();
        this.animate();
    }

    init() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        
        // Create points
        for (let i = 0; i < this.numPoints; i++) {
            this.points.push({
                x: this.pointSpacing * i,
                y: this.baseHeight,
                velocity: 0,
                force: 0
            });
        }
    }

    setupEventListeners() {
        window.addEventListener('mousemove', (e) => {
            const mouseImpact = Math.abs(e.clientX - this.lastMouse.x) * 0.1;
            this.mouseForce = Math.min(mouseImpact, 40);
            this.lastMouse = { x: e.clientX, y: e.clientY };
            
            // Find closest point to mouse
            const closestIndex = Math.round(e.clientX / this.pointSpacing);
            if (closestIndex >= 0 && closestIndex < this.points.length) {
                this.points[closestIndex].force = this.mouseForce * (e.clientY > this.baseHeight ? 1 : -1);
            }
        });

        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.baseHeight = this.height * 0.5;
            this.pointSpacing = this.width / (this.numPoints - 1);
            
            // Update points positions
            this.points.forEach((point, i) => {
                point.x = this.pointSpacing * i;
            });
        });
    }

    update() {
        const spring = 0.03;
        const friction = 0.98;
        const spread = 0.2;

        for (let i = 0; i < this.points.length; i++) {
            const point = this.points[i];
            
            // Apply spring force
            const displacement = this.baseHeight - point.y;
            point.force += spring * displacement;
            
            // Apply velocity
            point.velocity += point.force;
            point.velocity *= friction;
            point.y += point.velocity;
            point.force = 0;
            
            // Spread force to neighbors
            if (i > 0) {
                const prev = this.points[i - 1];
                const spread_force = spread * (point.y - prev.y);
                point.velocity -= spread_force;
                prev.velocity += spread_force;
            }
            if (i < this.points.length - 1) {
                const next = this.points[i + 1];
                const spread_force = spread * (point.y - next.y);
                point.velocity -= spread_force;
                next.velocity += spread_force;
            }
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Draw water
        this.ctx.fillStyle = '#006994';
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.height);
        this.ctx.lineTo(0, this.points[0].y);

        // Create smooth curve through points
        for (let i = 0; i < this.points.length - 1; i++) {
            const xc = (this.points[i].x + this.points[i + 1].x) / 2;
            const yc = (this.points[i].y + this.points[i + 1].y) / 2;
            this.ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, xc, yc);
        }

        this.ctx.lineTo(this.points[this.points.length - 1].x, this.points[this.points.length - 1].y);
        this.ctx.lineTo(this.width, this.height);
        this.ctx.fill();
        
        // Add gradient overlay
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.height);
        gradient.addColorStop(0, 'rgba(0, 105, 148, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 105, 148, 0.7)');
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when the window loads
window.addEventListener('load', () => {
    new WaterEffect();
}); 