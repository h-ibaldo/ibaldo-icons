import { forwardRef } from 'react';

const ApplicationWindow2ArrowLeftRight1 = forwardRef(({
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
    <polyline points="14.00000000018008 22.000000000448381 16.00000000018008 20.000000000448381 14.00000000018008 18.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.00000000018008" y1="20.000000000448381" x2="16.00000000018008" y2="20.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="10.000000000369255 12.000000000446562 8.00000000018008 14.000000000268301 10.000000000010914 16.000000000446562" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.00000000018008" y1="14.000000000986802" x2="8.00000000018008" y2="14.000000000268301" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.00000000018008,20.0000000004502c-1.104569499659192-.000000000001819-2-.895430500338989-2-2.000000000001819V4.000000000448381c0-1.10456949966192.895430500340808-2,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v14c0,1.10456949966283-.895430500340808,2-2,2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000180298" y1="5.000000000448381" x2="5.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000180298" y1="5.000000000448381" x2="8.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000180298" y1="5.000000000448381" x2="11.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ApplicationWindow2ArrowLeftRight1.displayName = 'ApplicationWindow2ArrowLeftRight1';

export default ApplicationWindow2ArrowLeftRight1;
export { ApplicationWindow2ArrowLeftRight1 };
