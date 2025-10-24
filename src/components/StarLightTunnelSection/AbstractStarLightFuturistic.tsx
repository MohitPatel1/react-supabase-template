import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
    const initialSpeed = 15;
    const accelerationFactor = 1.4;
    const maxSpeed = 200;
    const maxDuration = 3500; // 3.5 seconds

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
        const baseSize = (1 - this.z / 2000) * 3;
        const speedFactor = currentSpeed / initialSpeed;
        const size = baseSize * speedFactor;
        const baseOpacity = 1 - this.z / 2000;
        const speedOpacity = Math.min(1, 0.5 + (currentSpeed / maxSpeed) * 0.5);
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

      // Calculate exponential acceleration
      const speed = Math.min(
        initialSpeed * Math.pow(accelerationFactor, elapsedSeconds * 10),
        maxSpeed
      );

      ctx!.fillStyle = 'rgba(0, 5, 15, 0.2)';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      stars.forEach(star => {
        star.update(speed);
        star.draw(speed, maxSpeed);
      });

      // Check if we've reached max duration or max speed
      if (elapsed >= maxDuration || speed >= maxSpeed - 5) {
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

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Welcome to
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mohit's Digital Presence
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Built with love, care, coffee, and a lot of coding ☕
          </motion.p>            
        </motion.div>
      </div>
    </div>
  );
};

export default StarTunnelHero;
