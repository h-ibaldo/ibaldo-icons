import { forwardRef } from 'react';

const ArrowDownArrowIcirclePlayForWork1 = forwardRef(({
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
    <path d="M21.00000000018008,12.000000000842192c0,4.970562748196244-4.029437251800118,9-9,9S3.00000000018008,16.970562749038436,3.00000000018008,12.000000000842192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.00000000018008 11.000000000842192 12.00000000018008 15.000000000842192 16.00000000018008 11.000000000842192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.00000000018008" y1="3.000000000842192" x2="12.00000000018008" y2="15.000000000842192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowDownArrowIcirclePlayForWork1.displayName = 'ArrowDownArrowIcirclePlayForWork1';

export default ArrowDownArrowIcirclePlayForWork1;
export { ArrowDownArrowIcirclePlayForWork1 };
