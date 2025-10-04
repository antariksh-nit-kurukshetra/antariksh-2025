import { useEffect, useRef } from 'react';
import RotatingBackground from './RotatingBackground';
import Button from '../ui/Button';

const SpaceBackground = ({ 
  speedFactor = 0.05, 
  starColor = [255, 255, 255], 
  starCount = 5000,
  rotatingBgProps = {} 
} = {}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;

    const setCanvasExtents = () => {
      canvas.width = w;
      canvas.height = h;
    };

    setCanvasExtents();

    // Create 3D stars
    const makeStars = (count) => {
      const out = [];
      for (let i = 0; i < count; i++) {
        const s = {
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000,
        };
        out.push(s);
      }
      return out;
    };

    let stars = makeStars(starCount);

    const clear = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const putPixel = (x, y, brightness) => {
      const rgb = `rgba(${starColor[0]}, ${starColor[1]}, ${starColor[2]}, ${brightness})`;
      ctx.fillStyle = rgb;
      ctx.fillRect(x, y, 1, 1);
    };

    const moveStars = (distance) => {
      const count = stars.length;
      for (let i = 0; i < count; i++) {
        const s = stars[i];
        s.z -= distance;
        while (s.z <= 1) {
          s.z += 1000;
        }
      }
    };

    let prevTime;

    const init = (time) => {
      prevTime = time;
      requestAnimationFrame(tick);
    };

    const tick = (time) => {
      const elapsed = time - prevTime;
      prevTime = time;

      moveStars(elapsed * speedFactor);

      clear();

      const cx = w / 2;
      const cy = h / 2;

      const count = stars.length;
      for (let i = 0; i < count; i++) {
        const star = stars[i];

        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x < 0 || x >= w || y < 0 || y >= h) {
          continue;
        }

        const d = star.z / 1000.0;
        const b = 1 - d * d;

        putPixel(x, y, b);
      }

      requestAnimationFrame(tick);
    };

    // Handle resize
    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      setCanvasExtents();
    };

    window.addEventListener('resize', handleResize);

    requestAnimationFrame(init);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [speedFactor, starColor, starCount]);

  return (

    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: '#000011' }}>
      {/* Sliding Background Image - Bottom Layer */}
      <RotatingBackground 
        imagePath="/rotatingbg.png"
        slidingSpeed={120}
        opacity={0.4}
        {...rotatingBgProps}
      />
      
      {/* Moving Starfield Canvas - Top Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0"
        style={{ 
          pointerEvents: 'none',
          mixBlendMode: 'screen',
          backgroundColor: 'transparent',
          zIndex: 1 // Ensure stars are above sliding background
        }}
      ></canvas>
      
      {/* Additional glow effects */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div> */}
    </div>
  );
};

export default SpaceBackground;