import { forwardRef } from 'react';

const ApplicationWindow4PositiveAddPlay2 = forwardRef(({
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
    <rect x="1.999999993631718" y="1.998779299956368" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993631718" y1="7.998779299956368" x2="21.999999993631718" y2="7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="9.999999993642632 11.998779299956368 9.999999993642632 17.998779299956368 14.999999993642632 14.998779299956368 9.999999993642632 11.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ApplicationWindow4PositiveAddPlay2.displayName = 'ApplicationWindow4PositiveAddPlay2';

export default ApplicationWindow4PositiveAddPlay2;
export { ApplicationWindow4PositiveAddPlay2 };
