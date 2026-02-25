import { forwardRef } from 'react';

const ShareArrow2 = forwardRef(({
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
    <path d="M2,1.999999999998181v17c0,1.656854249489697,1.343145750510303,3,3,3h17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="18 1.999999999998181 22 5.999999999998181 18 9.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7,16.999999999998181v-2c0-4.970562748480006,4.029437251519994-9,9-9h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ShareArrow2.displayName = 'ShareArrow2';

export default ShareArrow2;
export { ShareArrow2 };
