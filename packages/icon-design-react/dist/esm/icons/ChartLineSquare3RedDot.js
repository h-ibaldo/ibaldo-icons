import { forwardRef } from 'react';

const ChartLineSquare3RedDot = forwardRef(({
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
    <path d="M21.949462885141656,10.000000000749424v7c0,2.761423749150708-2.238576250847473,5-5,5H6.949462885141656c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000000749424c0-2.761423749150708,2.238576250850201-5,5-5h7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="19.449462885138928" cy="4.500000000749424" r="2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.949462885141656 12.000000000927685 9.949462885141656 16.000000000927685 13.949462885141656 8.000000000927685 16.949462885141656 12.000000000927685" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartLineSquare3RedDot.displayName = 'ChartLineSquare3RedDot';

export default ChartLineSquare3RedDot;
export { ChartLineSquare3RedDot };
