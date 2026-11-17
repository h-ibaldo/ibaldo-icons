import { forwardRef } from 'react';

const TouchScreenSwipeLeftSquare = forwardRef(({
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
    <polyline points="4.999999993642632 14.998779299956368 1.999999993642632 11.998779299956368 4.999999993642632 8.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.999999993642632" y1="11.998779299956368" x2="1.999999993642632" y2="11.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="13.999999993642632" cy="11.998779299956368" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.999999993642632,16.99877929968352v3c0,1.104569499661011.895430500340808,2,2,2h16c1.104569499661011,0,2-.895430500338989,2-2V3.99877929968352c0-1.104569499661011-.895430500338989-2-2-2H3.999999993642632c-1.104569499659192,0-2,.895430500338989-2,2v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TouchScreenSwipeLeftSquare.displayName = 'TouchScreenSwipeLeftSquare';

export default TouchScreenSwipeLeftSquare;
export { TouchScreenSwipeLeftSquare };
