import { forwardRef } from 'react';

const ChartArrowUpCircle = forwardRef(({
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
    <circle cx="11.949462885139837" cy="12.000000000480213" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.949462885139837 15.000000000480213 9.949462885139837 12.000000000480213 11.949462885139837 14.000000000480213 16.949462885139837 9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.949462885139837 12.000000000480213 16.949462885139837 9.000000000480213 13.949462885139837 9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartArrowUpCircle.displayName = 'ChartArrowUpCircle';

export default ChartArrowUpCircle;
export { ChartArrowUpCircle };
