import { forwardRef } from 'react';

const HandStopPrivateCircle1 = forwardRef(({
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
    <circle cx="11.999999968595148" cy="11.997562036226554" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.999999968586053,9.997562036226554v2.437699666097615c.000000000009095,3.071973648391577,2.49032668550899,5.562300333902385,5.562300333900566,5.562300333902385h.000008999999409c2.10684394495911,0,4.032863402459043-1.190345486229489,4.975072660348815-3.074763996730326l1.462618005760305-2.925236003269674" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.999999968586053" y1="6.997562036226554" x2="8.999999968595148" y2="12.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999968586053" y1="5.997562036226554" x2="11.999999968595148" y2="11.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.999999968586053" y1="6.997562036226554" x2="14.999999968595148" y2="15.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

HandStopPrivateCircle1.displayName = 'HandStopPrivateCircle1';

export default HandStopPrivateCircle1;
export { HandStopPrivateCircle1 };
