import { useEffect, useRef } from 'react';
interface StarTunnelHeroProps {
  onComplete?: () => void;
}

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
  reset: () => void;
  update: (speed: number) => void;
  draw: (currentSpeed: number, maxSpeed: number) => void;
}

const StarTunnelHero = ({ onComplete }: StarTunnelHeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const stars: Star[] = [];
    let startTime = Date.now();
    const initialSpeed = 10;
    const accelerationFactor = 1.25;
    const maxSpeed = 300;
    const maxDuration = 5000; // 5 seconds

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class
    class StarImpl implements Star {
      x: number;
      y: number;
      z: number;
      pz: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.pz = 0;
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas!.width - canvas!.width / 2;
        this.y = Math.random() * canvas!.height - canvas!.height / 2;
        this.z = Math.random() * 1500 + 500;
        this.pz = this.z;
      }

      update(speed: number) {
        this.z -= speed;
        if (this.z < 1) {
          this.reset();
        }
      }

      draw(currentSpeed: number, maxSpeed: number) {
        const centerX = canvas!.width / 2;
        const centerY = canvas!.height / 2;

        // Current position
        const sx = (this.x / this.z) * centerX + centerX;
        const sy = (this.y / this.z) * centerY + centerY;

        // Previous position for trail effect
        const px = (this.x / this.pz) * centerX + centerX;
        const py = (this.y / this.pz) * centerY + centerY;

        this.pz = this.z;

        // Calculate star properties with speed-based modifications
        const baseSize = (1 - this.z / 2000) * 2;
        const speedFactor = currentSpeed / initialSpeed;
        
        // At low speeds, draw as dots. At high speeds, thick lines
        const size = Math.min(baseSize * Math.pow(speedFactor, 1.5), 8);
        
        const baseOpacity = 1 - this.z / 2000;
        const speedOpacity = Math.min(1, 0.3 + (currentSpeed / maxSpeed) * 0.7);
        const opacity = baseOpacity * speedOpacity;

        // Draw trail
        ctx!.beginPath();
        ctx!.moveTo(px, py);
        ctx!.lineTo(sx, sy);

        // Create gradient for glow effect - color changes with speed
        const gradient = ctx!.createLinearGradient(px, py, sx, sy);
        const speedRatio = currentSpeed / maxSpeed;
        
        // Blend from cyan/blue (slow) to white/yellow (fast)
        const r1 = Math.floor(100 + speedRatio * 155);
        const g1 = Math.floor(200 + speedRatio * 55);
        const b1 = Math.floor(255 + speedRatio * -15);
        
        const r2 = Math.floor(200 + speedRatio * 55);
        const g2 = Math.floor(240 + speedRatio * 15);
        const b2 = Math.floor(255 + speedRatio * -15);

        gradient.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, ${opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(${r2}, ${g2}, ${b2}, ${opacity})`);

        ctx!.strokeStyle = gradient;
        ctx!.lineWidth = size;
        ctx!.stroke();

        // Draw bright point at the end
        ctx!.beginPath();
        ctx!.arc(sx, sy, size * 0.8, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx!.fill();
      }
    }

    // Initialize stars - increased count for denser field
    for (let i = 0; i < 1200; i++) {
      stars.push(new StarImpl());
    }

    // Animation loop
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const elapsedSeconds = elapsed / 1000;

      // Calculate exponential acceleration - smoother curve over 5 seconds
      const speed = Math.min(
        initialSpeed * Math.pow(accelerationFactor, elapsedSeconds * 8),
        maxSpeed
      );

      // Trail length increases with speed for more dramatic effect
      const trailAlpha = Math.min(0.3, 0.05 + (speed / maxSpeed) * 0.25);
      ctx!.fillStyle = `rgba(0, 5, 15, ${trailAlpha})`;
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      stars.forEach(star => {
        star.update(speed);
        star.draw(speed, maxSpeed);
      });

      // Check if we've reached max duration or max speed
      if (elapsed >= maxDuration || speed >= maxSpeed - 10) {
        onComplete?.();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-950">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default StarTunnelHero;
