import { forwardRef } from 'react';

const ArrowHexagon12 = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon-design ${className}`.trim()}
    {...props}
  >
    <polyline points="2 6.119926759389273 2.972127382359758 10 6.852200622959572 9.027872617640242" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.083211366730211,14l3.317407051119517,5.971291039579228c.352739945010399.63492747212149,1.021979545580507,1.028708960420772,1.748311675990408,1.028708960420772h7.646390590519331c.726334251050503,0,1.395575457550876-.393783767191053,1.748314552251031-1.02871413765024l3.888888888879592-7c.335580597009539-.604045074611349.335580597009539-1.338526650089989,0-1.942571724710433l-3.888888888879592-7c-.352739094700155-.634930370450093-1.021980301200529-1.028714137639327-1.748314552251031-1.028714137639327h-7.646390590519331c-.726332130409901,0-1.395571730980009.393781488288369-1.748311675990408,1.028708960409858l-3.317407051119517,5.971291039590142" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowHexagon12.displayName = 'ArrowHexagon12';

export default ArrowHexagon12;
export { ArrowHexagon12 };
