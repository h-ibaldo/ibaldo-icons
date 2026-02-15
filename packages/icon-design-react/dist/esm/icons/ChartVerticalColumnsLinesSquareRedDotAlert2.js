import { forwardRef } from 'react';

const ChartVerticalColumnsLinesSquareRedDotAlert2 = forwardRef(({
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
    <path d="M21.974731440099276,10.000000003885361v7c0,2.761423749150708-2.238576250838378,5-5,5H6.974731440099276c-2.761423749148889,0-5-2.238576250849292-5-5V7.000000003885361c0-2.761423749150708,2.238576250851111-5,5-5h7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="19.474731440099276" cy="4.500000003885361" r="2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.974731440099276" y1="16.000000003885361" x2="7.974731440099276" y2="12.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731440099276" y1="16.000000003885361" x2="11.974731440099276" y2="8.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.974731440099276" y1="16.000000003885361" x2="15.974731440099276" y2="11.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartVerticalColumnsLinesSquareRedDotAlert2.displayName = 'ChartVerticalColumnsLinesSquareRedDotAlert2';

export default ChartVerticalColumnsLinesSquareRedDotAlert2;
export { ChartVerticalColumnsLinesSquareRedDotAlert2 };
