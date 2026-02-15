import { forwardRef } from 'react';

const GeometricFormsDeviation1 = forwardRef(({
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
    <circle cx="18.00000000018008" cy="6.000000000447017" r="3.999999999999773" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.00000000018008" y="2.000000000446562" width="8" height="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="14.00000000018008" y="14.000000000446562" width="8" height="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.00000000018008" y="14.000000000446562" width="8" height="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

GeometricFormsDeviation1.displayName = 'GeometricFormsDeviation1';

export default GeometricFormsDeviation1;
export { GeometricFormsDeviation1 };
