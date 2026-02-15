import { forwardRef } from 'react';

const CheckboxUncheckedSquare22 = forwardRef(({
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
    <rect x="1.949462885140747" y="2.000000000480213" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

CheckboxUncheckedSquare22.displayName = 'CheckboxUncheckedSquare22';

export default CheckboxUncheckedSquare22;
export { CheckboxUncheckedSquare22 };
