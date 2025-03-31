'use client';
import React, { useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initPoints = () => {
      const points: Point[] = [];
      const numPoints = (canvas.width * canvas.height) / 8000;
      
      for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        points.push({
          x,
          y,
          vx: 0,
          vy: 0,
          baseX: x,
          baseY: y,
        });
      }
      pointsRef.current = points;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const points = pointsRef.current;
      const mouse = mouseRef.current;

      // Update points
      points.forEach((point) => {
        // Mouse repulsion
        const dx = point.x - mouse.x;
        const dy = point.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const force = (120 - distance) / 120;
          point.vx += (dx / distance) * force * 0.8;
          point.vy += (dy / distance) * force * 0.8;
        }

        // Apply friction to stabilize movement
        point.vx *= 0.95;
        point.vy *= 0.95;

        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Keep points within canvas bounds
        point.x = Math.max(0, Math.min(canvas.width, point.x));
        point.y = Math.max(0, Math.min(canvas.height, point.y));
      });

      // Draw connections
      points.forEach((point1, i) => {
        points.slice(i + 1).forEach((point2) => {
          const dx = point1.x - point2.x;
          const dy = point1.y - point2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(point1.x, point1.y);
            ctx.lineTo(point2.x, point2.y);
            ctx.stroke();
          }
        });
      });

      // Draw points
      points.forEach((point) => {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'linear-gradient(to bottom, #f0f9ff, #ffffff)' }}
    />
  );
} 