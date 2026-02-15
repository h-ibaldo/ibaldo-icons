import { forwardRef } from 'react';

const CheckboxUncheckedSquare1 = forwardRef(({
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
    <rect x="3.949462885140747" y="4.000000000480213" width="16" height="16" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

CheckboxUncheckedSquare1.displayName = 'CheckboxUncheckedSquare1';

export default CheckboxUncheckedSquare1;
export { CheckboxUncheckedSquare1 };
