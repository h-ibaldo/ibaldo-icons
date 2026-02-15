import { forwardRef } from 'react';

const ApplicationWindow1Speech22 = forwardRef(({
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
    <path d="M9.890557941264888,14.000000000448381v8l4-3h6c1.104569499661011,0,2-.895430500338989,2-2v-3c0-1.104569499661011-.895430500338989-2-2-2h-8c-1.104569499661011,0-2,.895430500338989-2,2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22.000000000184627,9.000000000448381v-5c0-1.10456949966192-.895430500338989-2-2-2H4.000000000184627c-1.104569499661011,0-2,.89543050033808-2,2v16c0,1.10456949966283.895430500338989,2,2,2h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000000184627" y1="8.000000000448381" x2="22.000000000184627" y2="8.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000184846" y1="5.000000000448381" x2="5.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000184846" y1="5.000000000448381" x2="8.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000184846" y1="5.000000000448381" x2="11.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ApplicationWindow1Speech22.displayName = 'ApplicationWindow1Speech22';

export default ApplicationWindow1Speech22;
export { ApplicationWindow1Speech22 };
