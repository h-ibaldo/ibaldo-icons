import { forwardRef } from 'react';

const PencilEdit7 = forwardRef(({
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
    <polygon points="22 6.085786445528356 18 2.085786445528356 2 18.085786445528356 2.00000000036016 22.085786445168196 6.00000000036016 22.085786445168196 22 6.085786445528356" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.99999999963984" y1="5.085786445168196" x2="19" y2="9.085786445528356" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

PencilEdit7.displayName = 'PencilEdit7';

export default PencilEdit7;
export { PencilEdit7 };
