import { forwardRef } from 'react';

const ChartVerticalColumnsCircleArrowIn = forwardRef(({
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
    <polyline points="5.974731440099276 18.000000003885361 7.974731440099276 20.000000003885361 5.974731440099276 22.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.974731440099276" y1="20.000000003885361" x2="7.974731440099276" y2="20.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.974731440099276,22.000000003885361c5.522827148450233,0,10-4.477172851558862,10-10,0-5.52294921875-4.477172851549767-10-10-10C6.451904291659957,2.000000003885361,1.974731440099276,6.477050785135361,1.974731440099276,12.000000003885361c0,1.04541015625.161682128909888,2.052734375.459228515630457,3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="5.974731440099276" y="11.000000003885361" width="4" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="9.974731440099276" y="7.000000003885361" width="4" height="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="13.974731440099276" y="9.000000003885361" width="4" height="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartVerticalColumnsCircleArrowIn.displayName = 'ChartVerticalColumnsCircleArrowIn';

export default ChartVerticalColumnsCircleArrowIn;
export { ChartVerticalColumnsCircleArrowIn };
