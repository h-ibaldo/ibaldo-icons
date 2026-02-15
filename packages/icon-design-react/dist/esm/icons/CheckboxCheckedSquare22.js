import { forwardRef } from 'react';

const CheckboxCheckedSquare22 = forwardRef(({
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
    <polyline points="8.949462885140747 12.000000000480213 10.949462885140747 14.000000000480213 14.949462885140747 10.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="3.949462885140747" y="4.000000000480213" width="16" height="16" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

CheckboxCheckedSquare22.displayName = 'CheckboxCheckedSquare22';

export default CheckboxCheckedSquare22;
export { CheckboxCheckedSquare22 };
