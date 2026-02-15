import { forwardRef } from 'react';

const ApplicationWindow2Cloud4 = forwardRef(({
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
    <path d="M5.00000000018008,22.000000000448381l-1,.000000000001819c-1.104569499659192,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500340808-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.00000000018008,16.000000000448381v-.5c0-1.380737304686591-1.119262695310681-2.5-2.5-2.5-1.078491210930224,0-1.989013671860448.68658447265625-2.339721679680224,1.6435546875-.442260742180224-.395751953125-1.020080566409888-.6435546875-1.660278320319776-.6435546875-1.380737304680224,0-2.5,1.119262695313409-2.5,2.5v.550415039063409c-1.14111328125.231689453125-2,1.240112304686591-2,2.449584960936591,0,1.380737304688409,1.119262695319776,2.5,2.5,2.5h8.5c1.656860351569776,0,3-1.343139648436591,3-3,0-1.656860351561591-1.343139648430224-3-3-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000180298" y1="5.000000000448381" x2="5.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000180298" y1="5.000000000448381" x2="8.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000180298" y1="5.000000000448381" x2="11.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ApplicationWindow2Cloud4.displayName = 'ApplicationWindow2Cloud4';

export default ApplicationWindow2Cloud4;
export { ApplicationWindow2Cloud4 };
