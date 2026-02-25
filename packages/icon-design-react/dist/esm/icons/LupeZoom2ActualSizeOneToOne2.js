import { forwardRef } from 'react';

const LupeZoom2ActualSizeOneToOne2 = forwardRef(({
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
    <circle cx="9.999999981002475" cy="9.997562035418014" r="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.656860332561337" y1="15.654422386980514" x2="21.999999981002475" y2="21.997562035418014" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.999999980991561" y1="7.997562035418014" x2="6.999999980991561" y2="11.997562035418014" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.999999980991561" y1="7.997562035418014" x2="12.999999980991561" y2="11.997562035418014" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.999999980991561" y1="8.007562035418232" x2="9.999999980991561" y2="7.997562035418014" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.999999980991561" y1="12.007562035418232" x2="9.999999980991561" y2="11.997562035418014" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LupeZoom2ActualSizeOneToOne2.displayName = 'LupeZoom2ActualSizeOneToOne2';

export default LupeZoom2ActualSizeOneToOne2;
export { LupeZoom2ActualSizeOneToOne2 };
