import { forwardRef } from 'react';

const SunBrightness3 = forwardRef(({
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
    <polygon points="18.999999990796823 15.000000000456566 21.999999990796823 12.000000000456566 18.999999990796823 9.000000000456566 18.999999990796823 5.000000000456566 14.999999990796823 5.000000000456566 11.999999990796823 2.000000000456566 8.999999990796823 5.000000000456566 4.999999990796823 5.000000000456566 4.999999990796823 9.000000000456566 1.999999990796823 12.000000000456566 4.999999990796823 15.000000000456566 4.999999990796823 19.000000000456566 8.999999990796823 19.000000000456566 11.999999990796823 22.000000000456566 14.999999990796823 19.000000000456566 18.999999990796823 19.000000000456566 18.999999990796823 15.000000000456566" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999990796823" cy="12.000000000448381" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SunBrightness3.displayName = 'SunBrightness3';

export default SunBrightness3;
export { SunBrightness3 };
