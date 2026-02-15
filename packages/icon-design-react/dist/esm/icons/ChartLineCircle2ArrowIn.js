import { forwardRef } from 'react';

const ChartLineCircle2ArrowIn = forwardRef(({
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
    <polyline points="6 18 8 20 6 22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2" y1="20" x2="8" y2="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12,22c5.522827148430224,0,10-4.4771728515625,10-10,0-5.52294921875-4.477172851569776-10-10-10C6.477172851549767,2,2,6.47705078125,2,12c0,1.04541015625.161682128909888,2.052734375.459228515619543,3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7 14 10 10 14 13 17 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartLineCircle2ArrowIn.displayName = 'ChartLineCircle2ArrowIn';

export default ChartLineCircle2ArrowIn;
export { ChartLineCircle2ArrowIn };
