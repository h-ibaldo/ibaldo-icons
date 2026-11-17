import { forwardRef } from 'react';

const WarningSquareStackAlt = forwardRef(({
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
    <rect x="3.000000005000402" y="2.000000003886271" width="14" height="16" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.000000005000402" y1="13.010000003887399" x2="10.000000005000402" y2="13.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.000000005000402" y1="7.000000003886271" x2="10.000000005000402" y2="10.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.000000005000402,18.000000003886271v2c0,1.104569499664649.895430500338989,2,2,2h10c1.104569499659192,0,2-.895430500335351,2-2v-12c0-1.104569499663739-.895430500340808-2-2-2h-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WarningSquareStackAlt.displayName = 'WarningSquareStackAlt';

export default WarningSquareStackAlt;
export { WarningSquareStackAlt };
