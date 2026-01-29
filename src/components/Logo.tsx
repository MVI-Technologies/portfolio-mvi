interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'light';
}

const Logo = ({ className = '', size = 'md', variant = 'default' }: LogoProps) => {
  const sizes = {
    sm: { iconSize: 28, fontSize: 18, gap: 8 },
    md: { iconSize: 36, fontSize: 22, gap: 10 },
    lg: { iconSize: 44, fontSize: 26, gap: 12 },
  };

  const { iconSize, fontSize, gap } = sizes[size];
  const textColor = variant === 'light' ? 'text-white' : 'text-foreground';
  const primaryColor = variant === 'light' ? 'text-blue-300' : 'text-primary';

  return (
    <div className={`flex items-center ${className}`} style={{ gap }}>
      {/* Shield Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
            <stop offset="100%" stopColor="hsl(217, 91%, 50%)" />
          </linearGradient>
          <linearGradient id="shieldDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217, 91%, 50%)" />
            <stop offset="100%" stopColor="hsl(217, 91%, 40%)" />
          </linearGradient>
        </defs>
        {/* Shield base */}
        <path
          d="M24 4L6 12V22C6 33.05 13.74 43.28 24 46C34.26 43.28 42 33.05 42 22V12L24 4Z"
          fill="url(#shieldGradient)"
        />
        {/* Shield shadow/depth */}
        <path
          d="M24 4L6 12V22C6 33.05 13.74 43.28 24 46V4Z"
          fill="url(#shieldGradient)"
        />
        <path
          d="M24 4V46C34.26 43.28 42 33.05 42 22V12L24 4Z"
          fill="url(#shieldDark)"
        />
        {/* M shape cutout */}
        <path
          d="M14 16V34H18V24L24 30L30 24V34H34V16L24 26L14 16Z"
          fill="white"
          fillOpacity="0.95"
        />
        {/* Inner notch at top */}
        <path
          d="M24 8L20 10V14L24 12L28 14V10L24 8Z"
          fill="white"
          fillOpacity="0.3"
        />
      </svg>

      {/* Text */}
      <span 
        className="font-bold tracking-tight leading-none"
        style={{ fontSize }}
      >
        <span className={textColor}>MVI</span>
        <span className={primaryColor}>Tech</span>
      </span>
    </div>
  );
};

export default Logo;
