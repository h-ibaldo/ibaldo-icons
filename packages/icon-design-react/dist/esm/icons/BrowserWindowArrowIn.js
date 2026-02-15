import { forwardRef } from 'react';

const BrowserWindowArrowIn = forwardRef(({
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
    <path d="M1.999999993642632,17.075561526518868V3.998779299956368c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v16c0,1.104569499661011-.895430500340808,2-2,2H6.999999993642632" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993642632" y1="7.998779299956368" x2="21.999999993642632" y2="7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.00999999364285" y1="4.921997073393868" x2="4.999999993642632" y2="4.921997073393868" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.00999999364285" y1="4.921997073393868" x2="7.999999993642632" y2="4.921997073393868" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19" y1="4.921997073393868" x2="10.999999993642632" y2="4.921997073393868" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.999999993642632 12.998779299956368 10.999999993642632 12.998779299956368 10.999999993642632 16.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993642632" y1="21.998779299956368" x2="10.999999993642632" y2="12.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

BrowserWindowArrowIn.displayName = 'BrowserWindowArrowIn';

export default BrowserWindowArrowIn;
export { BrowserWindowArrowIn };
