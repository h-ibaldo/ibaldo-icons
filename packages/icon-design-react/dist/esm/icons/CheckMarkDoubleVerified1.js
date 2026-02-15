import { forwardRef } from 'react';

const CheckMarkDoubleVerified1 = forwardRef(({
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
    <polyline points="3.974731440090181 13.000000003874447 6.974731440090181 16.000000003874447 13.974731440090181 8.000000003874447" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.974731440090181 13.000000003874447 12.974731440090181 16.000000003874447 19.974731440090181 8.000000003874447" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

CheckMarkDoubleVerified1.displayName = 'CheckMarkDoubleVerified1';

export default CheckMarkDoubleVerified1;
export { CheckMarkDoubleVerified1 };
