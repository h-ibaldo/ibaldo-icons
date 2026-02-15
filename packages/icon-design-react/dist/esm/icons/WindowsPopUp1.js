import { forwardRef } from 'react';

const WindowsPopUp1 = forwardRef(({
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
    <rect x="2" y="2" width="16" height="16" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22,8v11.866666666672245c0,1.178207466298772-.955125867019888,2.133333333327755-2.133333333329574,2.133333333327755h-11.866666666669516" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2" y1="8" x2="17.999999999999091" y2="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.035268548598651" y1="4.998779303362426" x2="5.025268548599342" y2="4.998779303362426" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.035268548598651" y1="4.998779303362426" x2="8.025268548599342" y2="4.998779303362426" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WindowsPopUp1.displayName = 'WindowsPopUp1';

export default WindowsPopUp1;
export { WindowsPopUp1 };
