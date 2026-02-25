import { forwardRef } from 'react';

const RotatedSquareHighPriorityWarningExclamationPoint2 = forwardRef(({
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
    <rect x="4.221825375546466" y="4.219387443179009" width="15.556349186088269" height="15.556349186088269" rx="2.49999999999882" ry="2.49999999999882" transform="translate(-4.968838856957838 11.999285914730187) rotate(-44.999999999993044)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999968586053" y1="16.023095941721294" x2="11.999999968586053" y2="16.033095941721513" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999968586053" y1="8.033095941721513" x2="11.999999968586053" y2="12.033095941721513" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

RotatedSquareHighPriorityWarningExclamationPoint2.displayName = 'RotatedSquareHighPriorityWarningExclamationPoint2';

export default RotatedSquareHighPriorityWarningExclamationPoint2;
export { RotatedSquareHighPriorityWarningExclamationPoint2 };
