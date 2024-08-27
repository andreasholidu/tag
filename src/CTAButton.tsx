import React, { useState } from 'react';

interface CTAButtonProps {
  text: string;
  onClick: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick }) => {
    const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setGradientPosition({ x, y });
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  return (
    <button
      className="inline-flex justify-center rounded-lg border border-transparent bg-[#00809D] px-6 py-3 font-medium text-white hover:bg-[#024251] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00809D] focus-visible:ring-offset-2 transition-transform ease-in-out active:scale-95"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: isHovered
          ? `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #00809D, #024251 250%)`
          : 'linear-gradient(135deg, #00809D 0%, #00809D 100%)', // Default background
      }}
    >
      <span className="relative z-10">{text}</span>
      
    </button>
  );
};

export default CTAButton;
