import { forwardRef } from 'react';

const LupeSearchZoomIn = forwardRef(({
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
    <circle cx="11.000000014892066" cy="10.998779301076866" r="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.363952651612635" y1="17.362731937795616" x2="22.000000014892066" y2="21.998779301076866" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.000000014892066" y1="10.998779301076866" x2="15.000000014892066" y2="10.998779301076866" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.000000014892066" y1="6.998779301076866" x2="11.000000014892066" y2="14.998779301076866" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LupeSearchZoomIn.displayName = 'LupeSearchZoomIn';

export default LupeSearchZoomIn;
export { LupeSearchZoomIn };
