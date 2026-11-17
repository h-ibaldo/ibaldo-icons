import { forwardRef } from 'react';

const LupeClose = forwardRef(({
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
    <circle cx="11.000000014042598" cy="10.998779305395146" r="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.363952650763167" y1="17.362731942113896" x2="22.000000014042598" y2="21.998779305395146" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.000000014042598" y1="7.998779305395146" x2="8.000000014042598" y2="13.998779305395146" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.00000001391345" y1="7.998779305529752" x2="14.000000014173565" y2="13.998779305260541" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LupeClose.displayName = 'LupeClose';

export default LupeClose;
export { LupeClose };
