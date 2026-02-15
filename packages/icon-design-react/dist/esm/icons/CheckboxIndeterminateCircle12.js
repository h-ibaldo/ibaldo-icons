import { forwardRef } from 'react';

const CheckboxIndeterminateCircle12 = forwardRef(({
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
    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8" y1="12" x2="16" y2="12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

CheckboxIndeterminateCircle12.displayName = 'CheckboxIndeterminateCircle12';

export default CheckboxIndeterminateCircle12;
export { CheckboxIndeterminateCircle12 };
