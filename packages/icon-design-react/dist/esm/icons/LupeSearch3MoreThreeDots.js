import { forwardRef } from 'react';

const LupeSearch3MoreThreeDots = forwardRef(({
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
    <circle cx="8.999999993273377" cy="8.998779299956368" r="7.000000000000001" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.999999993273377" y1="21.998779299956368" x2="13.999999993273377" y2="13.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.999999993283382" y1="9.008779299956586" x2="5.999999993283382" y2="8.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.999999993283382" y1="9.008779299956586" x2="8.999999993283382" y2="8.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999993283382" y1="9.008779299956586" x2="11.999999993283382" y2="8.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LupeSearch3MoreThreeDots.displayName = 'LupeSearch3MoreThreeDots';

export default LupeSearch3MoreThreeDots;
export { LupeSearch3MoreThreeDots };
