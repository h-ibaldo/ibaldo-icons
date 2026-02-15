import { forwardRef } from 'react';

const BrowserWindowForbiddenAccessDennied3 = forwardRef(({
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
    <path d="M9.999999993990059,21.998779299956368H3.999999993990059c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993990059" y1="7.998779299956368" x2="21.999999993990059" y2="7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.999999993995516" cy="16.998779299957505" r="5.000000000001648" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.535533896509151" y1="13.46324539060879" x2="13.464466084620653" y2="20.53431320243908" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

BrowserWindowForbiddenAccessDennied3.displayName = 'BrowserWindowForbiddenAccessDennied3';

export default BrowserWindowForbiddenAccessDennied3;
export { BrowserWindowForbiddenAccessDennied3 };
