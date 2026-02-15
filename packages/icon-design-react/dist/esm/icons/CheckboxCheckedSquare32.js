import { forwardRef } from 'react';

const CheckboxCheckedSquare32 = forwardRef(({
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
    <polyline points="19.949462885140747 6.000000000480213 11.949462885140747 14.000000000480213 8.949462885140747 11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.949462885140747,5.000000000480213h-7c-1.656854249491516,0-3,1.343145750510303-3,3v8c0,1.656854249489697,1.343145750499389,3,3,3h8c1.656854249489697,0,3-1.343145750510303,3-3V7.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

CheckboxCheckedSquare32.displayName = 'CheckboxCheckedSquare32';

export default CheckboxCheckedSquare32;
export { CheckboxCheckedSquare32 };
