interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizes = {
    sm: { height: 28, iconSize: 28 },
    md: { height: 36, iconSize: 36 },
    lg: { height: 48, iconSize: 48 },
  };

  const { height, iconSize } = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Shield Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 100%, 55%)" />
            <stop offset="100%" stopColor="hsl(210, 100%, 40%)" />
          </linearGradient>
          <linearGradient id="shieldDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 100%, 35%)" />
            <stop offset="100%" stopColor="hsl(210, 100%, 25%)" />
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
      <div className="flex items-baseline" style={{ height }}>
        <span 
          className="font-bold tracking-tight text-foreground"
          style={{ fontSize: height * 0.65, lineHeight: 1 }}
        >
          MVI
        </span>
        <span 
          className="font-bold tracking-tight text-primary"
          style={{ fontSize: height * 0.65, lineHeight: 1 }}
        >
          Tech
        </span>
      </div>
    </div>
  );
};

export default Logo;
