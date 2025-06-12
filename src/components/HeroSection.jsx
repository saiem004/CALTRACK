import { useState, useEffect } from 'react';

const NeuralNetwork = () => {
  const [nodes, setNodes] = useState([]);
  
  useEffect(() => {
    const generateNodes = () => {
      const nodeCount = 30;
      const newNodes = [];
      for (let i = 0; i < nodeCount; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          connections: Math.floor(Math.random() * 3) + 1
        });
      }
      setNodes(newNodes);
    };
    generateNodes();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full">
        {/* Neural connections */}
        {nodes.map((node, i) => 
          nodes.slice(i + 1, i + node.connections + 1).map((connectedNode, j) => (
            <line
              key={`${i}-${j}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${connectedNode.x}%`}
              y2={`${connectedNode.y}%`}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              className="animate-pulse"
              style={{
                animation: `pulse 3s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))
        )}
        
        {/* Neural nodes */}
        {nodes.map((node) => (
          <circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill="rgba(255,255,255,0.3)"
            className="animate-ping"
            style={{
              animation: `ping 4s cubic-bezier(0, 0, 0.2, 1) infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const FloatingOrbs = () => {
  const orbs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 15,
  }));

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: orb.size,
              height: orb.size,
              left: `${orb.initialX}%`,
              top: `${orb.initialY}%`,
              background: `radial-gradient(circle, 
                rgba(255,255,255,0.4) 0%, 
                rgba(16,185,129,0.3) 30%, 
                rgba(59,130,246,0.2) 70%, 
                transparent 100%)`,
              animation: `float ${orb.duration}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(30px, -30px) rotate(90deg) scale(1.1); }
          50% { transform: translate(-20px, 20px) rotate(180deg) scale(0.9); }
          75% { transform: translate(-30px, -10px) rotate(270deg) scale(1.05); }
        }
      `}</style>
    </>
  );
};

const DataVisualization = () => {
  const [bars, setBars] = useState([]);
  
  useEffect(() => {
    const generateBars = () => {
      setBars(Array.from({ length: 12 }, () => Math.random() * 80 + 20));
    };
    generateBars();
    const interval = setInterval(generateBars, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-4 right-4 md:top-20 md:right-10 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-3 md:p-6 w-48 h-28 md:w-64 md:h-40">
      <div className="flex items-end h-full space-x-1 md:space-x-2">
        {bars.map((height, i) => (
          <div
            key={i}
            className="bg-gradient-to-t from-green-400 to-blue-400 rounded-t transition-all duration-1000 ease-out"
            style={{
              height: `${height}%`,
              width: '100%',
              opacity: 0.7
            }}
          />
        ))}
      </div>
      <div className="absolute top-1 left-2 md:top-2 md:left-4 text-white/60 text-xs font-medium">
        Live Analytics
      </div>
    </div>
  );
};

const CalorieCounter = () => {
  const [count, setCount] = useState(0);
  const target = 2150;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < target) return prev + Math.floor(Math.random() * 50) + 10;
        return 0;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const percentage = (count / target) * 100;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:bottom-6 md:right-4 md:left-auto md:translate-x-0 
                bg-white/10 backdrop-blur border border-gray-200 
                rounded-xl p-6 w-56 max-w-xs md:p-4 md:w-11/12 md:max-w-xs shadow-lg">

      <div className="text-gray-700 text-base mb-2 drop-shadow-sm md:text-sm">
        Daily Progress
      </div>

      <div className="text-3xl font-bold text-gray-900 mb-4 drop-shadow md:text-2xl md:mb-3">
        {count.toLocaleString()}
        <span className="text-lg text-gray-500 ml-1 md:text-sm">cal</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden md:h-2">
        <div 
          className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full transition-all duration-300"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>

      <div className="text-gray-500 text-sm mt-2 drop-shadow-sm md:text-xs">
        Target: {target.toLocaleString()} cal
      </div>
    </div>
  );
};

const ParticleExplosion = ({ trigger }) => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: (i * 18) * (Math.PI / 180),
    velocity: Math.random() * 100 + 50,
    size: Math.random() * 4 + 2,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute w-2 h-2 bg-white rounded-full transition-all duration-1000 ${
            trigger ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: '50%',
            top: '50%',
            transform: trigger 
              ? `translate(${Math.cos(particle.angle) * particle.velocity}px, ${Math.sin(particle.angle) * particle.velocity}px) scale(0)`
              : 'translate(-50%, -50%) scale(1)',
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
};

export default function ExtraordinaryHero() {
  const [isHovered, setIsHovered] = useState(false);
  const [particleExplosion, setParticleExplosion] = useState(false);

  const handleExplosionClick = () => {
    setParticleExplosion(true);
    setTimeout(() => setParticleExplosion(false), 1000);
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-blue-500 p-4 md:p-12 overflow-hidden">
        {/* Advanced Background Effects */}
        <NeuralNetwork />
        <FloatingOrbs />
        
        {/* Glassmorphism Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 1px, transparent 1px),
              radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px'
          }}
        />

        {/* Floating UI Elements */}
        <DataVisualization />
        <CalorieCounter />

        {/* Main Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="text-center max-w-6xl mx-auto px-4">
            
            {/* Animated Logo */}
            <div 
              className="relative mb-8 md:mb-12"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleExplosionClick}
            >
              <div className={`
                inline-flex items-center justify-center w-20 h-20 md:w-32 md:h-32 rounded-full
                bg-white/10 backdrop-blur-lg border-2 border-white/20
                transition-all duration-500 cursor-pointer
                ${isHovered ? 'scale-110 shadow-2xl shadow-white/30' : 'scale-100'}
              `}>
                <svg className="w-10 h-10 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                
                {/* Pulsing Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
                <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse" 
                     style={{ animationDelay: '0.5s' }} />
              </div>
              <ParticleExplosion trigger={particleExplosion} />
            </div>

            {/* Revolutionary Typography */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white mb-4 md:mb-8 leading-none">
              <div className="relative">
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                  CAL
                </span>
                <span className="inline-block mx-2 md:mx-4 text-3xl sm:text-5xl md:text-6xl lg:text-8xl opacity-60">×</span>
                <span 
                  className="inline-block transform hover:scale-105 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(45deg, #ffffff, #ffffff, #10B981, #3B82F6)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradientShift 4s ease-in-out infinite'
                  }}
                >
                  TRACK
                </span>
              </div>
              
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light text-white/80 mt-2 md:mt-4 tracking-[0.1em] md:tracking-[0.2em]">
                REVOLUTION
              </div>
            </h1>

            {/* Futuristic Subtitle */}
            <p className="text-sm sm:text-lg md:text-xl lg:text-3xl text-white/90 max-w-4xl mx-auto mb-8 md:mb-16 leading-relaxed font-light px-4">
              Experience the future of health tracking with{' '}
              <span className="font-semibold bg-white/20 px-2 md:px-3 py-1 rounded-full text-xs sm:text-sm md:text-base lg:text-xl">AI-powered insights</span>,{' '}
              <span className="font-semibold bg-white/20 px-2 md:px-3 py-1 rounded-full text-xs sm:text-sm md:text-base lg:text-xl">real-time analytics</span>, and{' '}
              <span className="font-semibold bg-white/20 px-2 md:px-3 py-1 rounded-full text-xs sm:text-sm md:text-base lg:text-xl">personalized nutrition</span>
            </p>

            {/* Get Started Button - Properly positioned */}
            <div className="flex justify-center mt-8 md:mt-16">
              <button 
                className="group relative px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 lg:px-16 lg:py-8 bg-white text-green-600 text-sm sm:text-base md:text-xl lg:text-2xl font-bold rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 md:hover:scale-110 hover:shadow-xl md:hover:shadow-2xl hover:shadow-white/40"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2 md:gap-4">
                  Get Started
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 transform group-hover:translate-x-1 md:group-hover:translate-x-3 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Positioned at bottom */}
        <div className="absolute bottom-6 md:bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="flex flex-col items-center text-white/60">
            <div className="w-px h-8 md:h-16 bg-gradient-to-b from-white/60 to-transparent relative">
              <div 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"
                style={{
                  animation: 'bounce 2s ease-in-out infinite'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate(-50%, 0); }
          40%, 43% { transform: translate(-50%, -30px); }
          70% { transform: translate(-50%, -15px); }
        }
      `}</style>
    </>
  );
}