import React from 'react';

/*
  --- HOW TO CHANGE THE LOGO ---

  This component defines the site's logo. The current logo is an inline SVG.

  To use your own logo from an image link (e.g., a .png or .svg file),
  you can replace the entire `Logo` component below with a simpler version like this example:

  --- START OF EXAMPLE ---

  const Logo: React.FC<{ className?: string }> = ({ className }) => {
    // ==> PASTE YOUR LOGO IMAGE URL HERE <==
    const logoUrl = 'https://your-website.com/path/to/your-logo.svg';

    return (
      <div className={className}>
        <img src={logoUrl} alt="YC Custom Homes Logo" className="h-12" />
      </div>
    );
  };

  --- END OF EXAMPLE ---

  * Note: You may need to adjust the `h-12` (height) class to fit your logo's dimensions.
*/


const Logo: React.FC<{
  className?: string;
  variant?: 'stacked' | 'inline';
}> = ({ className, variant = 'stacked' }) => {
  const SvgMonogram = ({ svgClassName }: { svgClassName?: string }) => (
    <svg
      viewBox="0 0 358 128"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClassName || "h-12 text-white"}
      fill="currentColor"
      aria-label="YC Monogram"
    >
      <g>
        {/* Y shape */}
        <path d="M0 47.95L56.24 47.95L102.9 0L131.37 0L86.06 64L131.37 128L102.9 128L56.24 80.05L0 80.05L0 47.95Z" />
        {/* C shape */}
        <path d="M334.12 0C271.74 0 248.9 32.13 248.9 64C248.9 95.87 271.74 128 334.12 128H358C295.62 128 272.78 95.87 272.78 64C272.78 32.13 295.62 0 358 0H334.12Z" />
        {/* House shape */}
        <path d="M299.78 79.1V60.7L311.72 50.84L323.66 60.7V79.1H299.78Z" />
        {/* Cutout for door/window area using background color */}
        <rect x="308.2" y="70" width="7" height="9.1" fill="var(--bg-color, #1a1a1a)" />
        {/* Thin connecting line over the top */}
        <rect x="80" y="60" width="180" height="8" fill="currentColor" />
      </g>
    </svg>
  );

  const LogoText = ({ textClassName }: { textClassName?: string }) => (
      <p className={textClassName || "font-medium tracking-[0.4em] text-white"}>
        CUSTOM HOMES
      </p>
  );

  if (variant === 'inline') {
    return (
      <div className={`inline-flex items-center space-x-4 ${className}`}>
        <SvgMonogram />
        <div className="flex flex-col text-sm leading-tight">
          <LogoText textClassName="text-sm font-bold tracking-[0.2em] text-white" />
        </div>
      </div>
    );
  }

  // Default: 'stacked'
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <SvgMonogram svgClassName="h-14 text-white" />
      <div className="mt-4">
        <LogoText textClassName="text-lg font-medium tracking-[0.4em] text-white" />
      </div>
    </div>
  );
};

export default Logo;