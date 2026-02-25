import { forwardRef } from 'react';

const XDeleteClose32 = forwardRef(({
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
    <line x1="5.999999991059667" y1="18.000000000626642" x2="17.999999990510332" y2="6.000000001168701" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.999999990250217" y1="18.000000000894943" x2="5.999999991330697" y2="6.0000000009004" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

XDeleteClose32.displayName = 'XDeleteClose32';

export default XDeleteClose32;
export { XDeleteClose32 };
