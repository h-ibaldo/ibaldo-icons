import { forwardRef } from 'react';

const ChartVerticalColumnsLinesSquareNegative1 = forwardRef(({
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
    <rect x="1.974731440099276" y="2.000000003885361" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.974731440099276" y1="12.000000003885361" x2="6.974731440099276" y2="6.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731440099276" y1="15.000000003885361" x2="11.974731440099276" y2="6.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.974731440099276" y1="10.000000003885361" x2="16.974731440099276" y2="6.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartVerticalColumnsLinesSquareNegative1.displayName = 'ChartVerticalColumnsLinesSquareNegative1';

export default ChartVerticalColumnsLinesSquareNegative1;
export { ChartVerticalColumnsLinesSquareNegative1 };
