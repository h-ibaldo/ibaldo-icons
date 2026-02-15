import { forwardRef } from 'react';

const LupeSearch3CheckCheckedVerified = forwardRef(({
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
    <circle cx="8.999999993264282" cy="8.998779299956368" r="7.000000000000001" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.999999993264282" y1="21.998779299956368" x2="13.999999993264282" y2="13.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.749999993264282 8.998779299956368 8.249999993264282 10.498779299956368 11.249999993264282 7.498779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LupeSearch3CheckCheckedVerified.displayName = 'LupeSearch3CheckCheckedVerified';

export default LupeSearch3CheckCheckedVerified;
export { LupeSearch3CheckCheckedVerified };
