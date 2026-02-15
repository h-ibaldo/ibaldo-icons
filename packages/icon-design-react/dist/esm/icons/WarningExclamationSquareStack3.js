import { forwardRef } from 'react';

const WarningExclamationSquareStack3 = forwardRef(({
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
    <rect x="7.000000005000402" y="3.000000003880814" width="14" height="18.000000000010914" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.000000005000402" y1="4.000000003891728" x2="3.000000005000402" y2="20.000000003891728" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.000000005000402" y1="8.000000003891728" x2="14.000000005000402" y2="12.000000003891728" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.000000005000402" y1="16.010000003891946" x2="14.000000005000402" y2="16.000000003891728" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WarningExclamationSquareStack3.displayName = 'WarningExclamationSquareStack3';

export default WarningExclamationSquareStack3;
export { WarningExclamationSquareStack3 };
