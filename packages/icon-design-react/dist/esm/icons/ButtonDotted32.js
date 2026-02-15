import { forwardRef } from 'react';

const ButtonDotted32 = forwardRef(({
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
    <rect x="1.99999999518667" y="6.999999997010121" width="20" height="10.000000007293295" rx="4.999995000386497" ry="4.999995000386497" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.999999990799552" y1="12.010000000450418" x2="7.999999990799552" y2="12.0000000004502" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999990799552" y1="12.010000000450418" x2="11.999999990799552" y2="12.0000000004502" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.999999990799552" y1="12.010000000450418" x2="15.999999990799552" y2="12.0000000004502" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ButtonDotted32.displayName = 'ButtonDotted32';

export default ButtonDotted32;
export { ButtonDotted32 };
