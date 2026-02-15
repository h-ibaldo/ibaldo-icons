import { forwardRef } from 'react';

const ChartVerticalColumnsLinesCircleArrowIn = forwardRef(({
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
    <polyline points="6 18.000000000480213 8 20.000000000480213 6 22.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2" y1="20.000000000480213" x2="8" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12,22.000000000480213c5.522827148450233,0,10-4.4771728515625,10-10,0-5.52294921875-4.477172851549767-10-10-10C6.477172851560681,2.000000000480213,2,6.477050781730213,2,12.000000000480213c0,1.04541015625.161682128909888,2.052734375.459228515630457,3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8" y1="14.000000000480213" x2="8" y2="11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="14.000000000480213" x2="12" y2="8.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16" y1="14.000000000480213" x2="16" y2="10.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartVerticalColumnsLinesCircleArrowIn.displayName = 'ChartVerticalColumnsLinesCircleArrowIn';

export default ChartVerticalColumnsLinesCircleArrowIn;
export { ChartVerticalColumnsLinesCircleArrowIn };
