import { forwardRef } from 'react';

const ApplicationWindow1MusicNote22 = forwardRef(({
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
    <path d="M12.000000000184627,22.000000000448381H4.000000000184627c-1.104569499661011,0-2-.89543050033717-2-2V4.000000000448381c0-1.10456949966192.895430500338989-2,2-2h16c1.104569499661011,0,2,.89543050033808,2,2v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000000184627" y1="8.000000000448381" x2="22.000000000184627" y2="8.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="22.000000000184627 15.000000000448381 19.000000000184627 14.000000000448381 19.000000000184627 21.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <ellipse cx="17.500000000184627" cy="21.000000000448381" rx="1.5" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000184846" y1="5.000000000448381" x2="5.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000184846" y1="5.000000000448381" x2="8.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000184846" y1="5.000000000448381" x2="11.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ApplicationWindow1MusicNote22.displayName = 'ApplicationWindow1MusicNote22';

export default ApplicationWindow1MusicNote22;
export { ApplicationWindow1MusicNote22 };
