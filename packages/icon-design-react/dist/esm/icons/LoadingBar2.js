import { forwardRef } from 'react';

const LoadingBar2 = forwardRef(({
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
    <rect x="1.974731447505079" y="7.999999998411681" width="19.999999999999972" height="8.000000004690492" rx="3.999996000808866" ry="3.999996000808866" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="4.974731447505022" y="10.999999995049066" width="7.999999999999972" height="2.000000011334095" rx=".999999006338874" ry=".999999006338874" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LoadingBar2.displayName = 'LoadingBar2';

export default LoadingBar2;
export { LoadingBar2 };
