import { useEffect, useRef } from 'react';

interface StarTunnelHeroProps {
  onComplete?: () => void;
}

interface StarColor {
  r: number;
  g: number;
  b: number;
}

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
  brightness: number;
  baseSize: number;
  color: StarColor;
  twinkle: number;
  currentBrightness: number;
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
    let animationTime = 0;
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

    // Helper function to generate star color based on type
    const getStarColor = (): StarColor => {
      const rand = Math.random();
      if (rand < 0.6) {
        // White-blue stars (hot, bright)
        return {
          r: 200 + Math.random() * 55,
          g: 220 + Math.random() * 35,
          b: 255,
        };
      } else if (rand < 0.9) {
        // Yellow-white stars (sun-like)
        return {
          r: 255,
          g: 240 + Math.random() * 15,
          b: 200 + Math.random() * 55,
        };
      } else {
        // Red-orange stars (cooler)
        return {
          r: 255,
          g: 180 + Math.random() * 50,
          b: 100 + Math.random() * 80,
        };
      }
    };

    // Star class
    class StarImpl implements Star {
      x: number;
      y: number;
      z: number;
      pz: number;
      brightness: number;
      baseSize: number;
      color: StarColor;
      twinkle: number;
      currentBrightness: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.pz = 0;
        this.brightness = 0;
        this.baseSize = 0;
        this.color = { r: 0, g: 0, b: 0 };
        this.twinkle = 0;
        this.currentBrightness = 0;
        this.reset();
      }

      reset() {
        // Exponential distribution: more stars far away
        const depthRandom = Math.random();
        this.z = 500 + Math.pow(depthRandom, 2) * 2500; // 500-3000 range, clustered far
        this.pz = this.z;

        // Spawn stars across entire screen with proper perspective
        // Stars appear to come from all directions
        const spawnRadius = this.z * 1.5; // Wider distribution for tunnel effect
        const angle = Math.random() * Math.PI * 2;
        const radiusVariation = Math.random();
        const radius = spawnRadius * radiusVariation;
        
        // Offset to ensure stars spawn all over screen
        this.x = Math.cos(angle) * radius;
        this.y = Math.sin(angle) * radius;

        // Variable star properties
        this.brightness = 0.3 + Math.random() * 0.7; // 0.3-1.0
        this.baseSize = 0.5 + Math.random() * 1.5; // 0.5-2.0
        this.color = getStarColor();
        this.twinkle = Math.random() * Math.PI * 2;
        this.currentBrightness = this.brightness;
      }

      update(speed: number) {
        this.z -= speed;
        
        // Subtle brightness oscillation (twinkling)
        const twinkleSpeed = 0.001 + Math.random() * 0.002;
        this.twinkle += twinkleSpeed;
        const twinkleFactor = 0.85 + Math.sin(this.twinkle) * 0.15;
        this.currentBrightness = this.brightness * twinkleFactor;
        
        if (this.z < 1) {
          this.reset();
        }
      }

      draw(currentSpeed: number, maxSpeed: number) {
        const centerX = canvas!.width / 2;
        const centerY = canvas!.height / 2;

        // Dynamic FOV based on speed
        const fovFactor = 1 + (currentSpeed / maxSpeed) * 0.4; // 1.0x -> 1.4x

        // Current position with FOV expansion
        const sx = (this.x / this.z) * centerX * fovFactor + centerX;
        const sy = (this.y / this.z) * centerY * fovFactor + centerY;

        // Previous position for trail effect
        const px = (this.x / this.pz) * centerX * fovFactor + centerX;
        const py = (this.y / this.pz) * centerY * fovFactor + centerY;

        this.pz = this.z;

        // Calculate radial distance from center (0-1 normalized)
        const dx = sx - centerX;
        const dy = sy - centerY;
        const maxRadius = Math.sqrt(
          centerX * centerX + centerY * centerY
        );
        const radialDistance = Math.sqrt(dx * dx + dy * dy) / maxRadius;

        // Apply radial velocity multiplier (edges move faster)
        const radialSpeedFactor = 1 + radialDistance * 2; // 1x at center, 3x at edges
        const effectiveSpeed = currentSpeed * radialSpeedFactor;

        // Skip stars outside viewport for performance
        if (sx < -50 || sx > canvas!.width + 50 || 
            sy < -50 || sy > canvas!.height + 50) {
          return;
        }

        // LOD: Stars very far away render as simple dots
        if (this.z > 2000) {
          const size = this.baseSize * 0.8;
          const opacity = Math.min(1, this.currentBrightness);
          ctx!.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx!.fillRect(sx, sy, size, size);
          return;
        }

        // Calculate star properties with speed-based modifications
        const baseSize = this.baseSize * (1 - this.z / 3000);
        const speedFactor = effectiveSpeed / initialSpeed;
        
        // At low speeds, draw as dots. At high speeds, thick lines
        const size = Math.min(baseSize * Math.pow(speedFactor, 1.5), 8);
        
        const baseOpacity = 1 - this.z / 3000;
        const speedOpacity = Math.min(1, 0.3 + (effectiveSpeed / maxSpeed) * 0.7);
        const opacity = baseOpacity * speedOpacity * this.currentBrightness;

        // Draw trail with dynamic length - up to 20% of view height
        const maxTrailLength = canvas!.height * 0.2;
        const trailLength = Math.sqrt((sx - px) ** 2 + (sy - py) ** 2);
        
        if (trailLength > 2 && effectiveSpeed > 5) {
          // Extend trail backward for tunnel effect
          const trailDirectionX = (px - sx) / trailLength;
          const trailDirectionY = (py - sy) / trailLength;
          
          // Calculate extended trail start point
          const extendedTrailLength = Math.min(trailLength * 3, maxTrailLength);
          const extendedPx = sx - trailDirectionX * extendedTrailLength;
          const extendedPy = sy - trailDirectionY * extendedTrailLength;
          
          ctx!.beginPath();
          ctx!.moveTo(extendedPx, extendedPy);
          ctx!.lineTo(sx, sy);

          // Create gradient for glow effect with color variation
          const gradient = ctx!.createLinearGradient(extendedPx, extendedPy, sx, sy);
          const speedRatio = effectiveSpeed / maxSpeed;
          
          // Trail opacity based on speed and position
          const baseTrailAlpha = 0.15 + speedRatio * 0.45;
          const radialTrailBoost = 1 + radialDistance * 0.6;
          const trailAlpha = baseTrailAlpha * radialTrailBoost;

          // Blend colors based on speed
          const colorMix = Math.min(speedRatio, 1);
          const r1 = Math.floor(this.color.r * (1 - colorMix) + 255 * colorMix);
          const g1 = Math.floor(this.color.g * (1 - colorMix) + 255 * colorMix);
          const b1 = Math.floor(this.color.b * (1 - colorMix) + 255 * colorMix);

          // Gradient from transparent at start to bright at end
          gradient.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, ${trailAlpha * 0.2})`);
          gradient.addColorStop(0.5, `rgba(${r1}, ${g1}, ${b1}, ${trailAlpha * 0.6})`);
          gradient.addColorStop(1, `rgba(${r1}, ${g1}, ${b1}, ${trailAlpha * opacity})`);

          ctx!.strokeStyle = gradient;
          ctx!.lineWidth = size;
          ctx!.stroke();
        }

        // Chromatic aberration at high speeds
        if (effectiveSpeed / maxSpeed > 0.6 && radialDistance > 0.5) {
          const aberration = (effectiveSpeed / maxSpeed - 0.6) * 2.5 * radialDistance;
          const offset = aberration * 3;

          // Draw RGB channels separately with offset
          ctx!.globalAlpha = opacity * 0.3;
          
          // Red channel (shifted outward)
          ctx!.fillStyle = `rgba(255, 0, 0, ${opacity})`;
          ctx!.fillRect(sx + offset, sy + offset, size * 0.7, size * 0.7);
          
          // Green channel (center)
          ctx!.fillStyle = `rgba(0, 255, 0, ${opacity})`;
          ctx!.fillRect(sx, sy, size * 0.7, size * 0.7);
          
          // Blue channel (shifted inward)
          ctx!.fillStyle = `rgba(0, 0, 255, ${opacity})`;
          ctx!.fillRect(sx - offset, sy - offset, size * 0.7, size * 0.7);
          
          ctx!.globalAlpha = 1;
        }

        // Enhanced glow effect at high speeds
        const glowIntensity = 0.3 + (effectiveSpeed / maxSpeed) * 0.7;
        
        // Outer glow with star color
        ctx!.shadowBlur = 15 * glowIntensity * this.brightness;
        ctx!.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${glowIntensity})`;
        
        // Color-tinted halo
        const gradient = ctx!.createRadialGradient(sx, sy, 0, sx, sy, size * 3);
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
        
        ctx!.fillStyle = gradient;
        ctx!.fillRect(sx - size * 3, sy - size * 3, size * 6, size * 6);

        // Draw bright core
        ctx!.shadowBlur = 0;
        ctx!.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx!.beginPath();
        ctx!.arc(sx, sy, size * 0.8, 0, Math.PI * 2);
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
      animationTime += 0.016; // ~60fps

      // Calculate exponential acceleration - smoother curve over 5 seconds
      const speed = Math.min(
        initialSpeed * Math.pow(accelerationFactor, elapsedSeconds * 8),
        maxSpeed
      );

      // Longer trail persistence for tunnel effect
      // Less fade at high speeds to maintain tunnel feeling
      const baseAlpha = 0.12;
      const speedAlpha = (speed / maxSpeed) * 0.25;
      const trailAlpha = Math.max(baseAlpha - speedAlpha, 0.08);
      
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
