import { forwardRef } from 'react';

const Cast22 = forwardRef(({
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
    <path d="M15,19.999999999998181h4c1.656854249489697,0,3-1.343145750506665,3-3V6.999999999998181c0-1.656854249493335-1.343145750510303-3-3-3H5c-1.656854249489697,0-3,1.343145750506665-3,3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3,19.999999999998181c0-.552284749799583-.447715250200417-1-1-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7,19.999999999998181c0-2.761423749001551-2.238576251000268-5-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11,19.999999999998181c0-4.970562748199882-4.029437251800118-9-9-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Cast22.displayName = 'Cast22';

export default Cast22;
export { Cast22 };
