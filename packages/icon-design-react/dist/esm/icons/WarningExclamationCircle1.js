import { forwardRef } from 'react';

const WarningExclamationCircle1 = forwardRef(({
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
    <circle cx="11.974731450049148" cy="12.000000000928594" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731450040053" y1="16.010000000480431" x2="11.974731450040053" y2="16.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731450040053" y1="8.000000000479304" x2="11.974731450040053" y2="12.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WarningExclamationCircle1.displayName = 'WarningExclamationCircle1';

export default WarningExclamationCircle1;
export { WarningExclamationCircle1 };
