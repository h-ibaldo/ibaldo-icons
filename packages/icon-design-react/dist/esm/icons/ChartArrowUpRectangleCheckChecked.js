import { forwardRef } from 'react';

const ChartArrowUpRectangleCheckChecked = forwardRef(({
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
    <polyline points="16.949462885139837 4.000000000480213 18.949462885139837 6.000000000480213 21.949462885139837 3.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.949462885139837,9.000000000480213v8c0,2.761423749150708-2.238576250850201,5-5,5H6.949462885139837c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000000480213c0-2.761423749150708,2.238576250850201-5,5-5h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.949462885139837 16.000000000480213 9.949462885139837 13.000000000480213 11.949462885139837 15.000000000480213 16.949462885139837 10.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.949462885139837 13.000000000480213 16.949462885139837 10.000000000480213 13.949462885139837 10.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartArrowUpRectangleCheckChecked.displayName = 'ChartArrowUpRectangleCheckChecked';

export default ChartArrowUpRectangleCheckChecked;
export { ChartArrowUpRectangleCheckChecked };
