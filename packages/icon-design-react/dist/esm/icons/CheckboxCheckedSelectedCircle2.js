import { forwardRef } from 'react';

const CheckboxCheckedSelectedCircle2 = forwardRef(({
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
    <circle cx="11.999999981180736" cy="11.999996564258254" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="6.999999981180736" y="6.999996564258254" width="10" height="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.999999981180736 11.999996564258254 10.999999981180736 13.499996564258254 13.999999981180736 10.999996564258254" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

CheckboxCheckedSelectedCircle2.displayName = 'CheckboxCheckedSelectedCircle2';

export default CheckboxCheckedSelectedCircle2;
export { CheckboxCheckedSelectedCircle2 };
