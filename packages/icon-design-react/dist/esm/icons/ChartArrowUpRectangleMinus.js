import { forwardRef } from 'react';

const ChartArrowUpRectangleMinus = forwardRef(({
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
    <path d="M21.949462885142566,9.000000000480213v8c0,2.761423749150708-2.238576250850201,5-5,5H6.949462885142566c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000000480213c0-2.761423749150708,2.238576250850201-5,5-5h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.949462885142566 16.000000000480213 9.949462885142566 13.000000000480213 11.949462885142566 15.000000000480213 16.949462885142566 10.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.949462885142566 13.000000000480213 16.949462885142566 10.000000000480213 13.949462885142566 10.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.949462885142566" y1="4.500000000571163" x2="21.949462885053435" y2="4.500000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartArrowUpRectangleMinus.displayName = 'ChartArrowUpRectangleMinus';

export default ChartArrowUpRectangleMinus;
export { ChartArrowUpRectangleMinus };
