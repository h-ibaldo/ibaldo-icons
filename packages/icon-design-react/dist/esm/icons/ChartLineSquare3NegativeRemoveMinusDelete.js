import { forwardRef } from 'react';

const ChartLineSquare3NegativeRemoveMinusDelete = forwardRef(({
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
    <path d="M21.949462885142566,9.000000000927685v8c0,2.761423749150708-2.238576250845654,5-5,5H6.949462885142566c-2.761423749150708,0-5-2.238576250849292-5-5V7.000000000927685c0-2.76142374914707,2.238576250849292-5,5-5h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.949462885142566 12.000000000927685 9.949462885142566 16.000000000927685 13.949462885142566 8.000000000927685 16.949462885142566 12.000000000927685" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.949462885142566" y1="4.500000001018634" x2="21.949462885050707" y2="4.500000000927685" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartLineSquare3NegativeRemoveMinusDelete.displayName = 'ChartLineSquare3NegativeRemoveMinusDelete';

export default ChartLineSquare3NegativeRemoveMinusDelete;
export { ChartLineSquare3NegativeRemoveMinusDelete };
