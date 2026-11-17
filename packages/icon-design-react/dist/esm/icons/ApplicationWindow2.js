import { forwardRef } from 'react';

const ApplicationWindow2 = forwardRef(({
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
    <rect x="2.00000000018008" y="2.000000000448836" width="20" height="20" rx="1.999999999999068" ry="1.999999999999068" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22" y1="8" x2="2" y2="8.000000000897671" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.009999999870161" y1="5.000000000133696" x2="18.999999999869942" y2="5.000000000133696" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.009999999870161" y1="5.000000000268301" x2="15.999999999869942" y2="5.000000000268301" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.009999999870161" y1="5.000000000403816" x2="12.999999999869942" y2="5.000000000403816" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ApplicationWindow2.displayName = 'ApplicationWindow2';

export default ApplicationWindow2;
export { ApplicationWindow2 };
