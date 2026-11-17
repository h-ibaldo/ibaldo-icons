import { forwardRef } from 'react';

const ApplicationWindow1Lightning4 = forwardRef(({
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
    <path d="M11.00000000018008,22.000000000448381h-7c-1.104569499660101,0-2-.89543050033717-2-2V4.000000000448381c0-1.10456949966192.895430500339899-2,2-2h16c1.104569499660101,0,2,.89543050033808,2,2v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.00000000018008" y1="8.000000000448381" x2="22.00000000018008" y2="8.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000180298" y1="5.000000000448381" x2="5.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000180298" y1="5.000000000448381" x2="8.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000180298" y1="5.000000000448381" x2="11.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="16.00000000018008 12.000000000448381 14.00000000018008 17.000000000448381 16.00000000018008 17.000000000448381 15.00000000018008 22.000000000448381 22.00000000018008 16.000000000448381 20.00000000018008 16.000000000448381 22.00000000018008 12.000000000448381 16.00000000018008 12.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ApplicationWindow1Lightning4.displayName = 'ApplicationWindow1Lightning4';

export default ApplicationWindow1Lightning4;
export { ApplicationWindow1Lightning4 };
