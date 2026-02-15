import { forwardRef } from 'react';

const LupeSearch2CheckCheckedVerified = forwardRef(({
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
    <circle cx="9.999999993264282" cy="9.998779299956368" r="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.656860344823144" y1="15.655639651518868" x2="21.999999993264282" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.999999993283382 9.998779299956368 8.999999993283382 11.998779299956368 12.999999993283382 7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LupeSearch2CheckCheckedVerified.displayName = 'LupeSearch2CheckCheckedVerified';

export default LupeSearch2CheckCheckedVerified;
export { LupeSearch2CheckCheckedVerified };
