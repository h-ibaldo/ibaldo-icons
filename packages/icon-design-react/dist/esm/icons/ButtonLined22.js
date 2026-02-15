import { forwardRef } from 'react';

const ButtonLined22 = forwardRef(({
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
    <rect x="1.999999995185689" y="6.999999997010121" width="20.000000000000028" height="10.000000007293295" rx="4.99999500897246" ry="4.99999500897246" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.999999990797733 13.000000000448381 8.999999990797733 11.000000000448381 10.999999990797733 13.000000000448381 12.999999990797733 11.000000000448381 14.999999990797733 13.000000000448381 16.999999990797733 11.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ButtonLined22.displayName = 'ButtonLined22';

export default ButtonLined22;
export { ButtonLined22 };
