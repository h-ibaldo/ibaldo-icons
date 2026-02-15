import { forwardRef } from 'react';

const CheckboxUncheckedCircleRounded12 = forwardRef(({
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
    <circle cx="11.949462885140747" cy="12.000000000480213" r="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

CheckboxUncheckedCircleRounded12.displayName = 'CheckboxUncheckedCircleRounded12';

export default CheckboxUncheckedCircleRounded12;
export { CheckboxUncheckedCircleRounded12 };
