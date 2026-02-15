import { forwardRef } from 'react';

const SunBrightnessSquare2 = forwardRef(({
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
    <rect x="1.999999990796823" y="2.000000000448381" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="16.999999990796823 14.000000000448381 18.999999990796823 12.000000000448381 16.999999990796823 10.000000000448381 16.999999990796823 7.000000000448381 13.999999990796823 7.000000000448381 11.999999990796823 5.000000000448381 9.999999990796823 7.000000000448381 6.999999990796823 7.000000000448381 6.999999990796823 10.000000000448381 4.999999990796823 12.000000000448381 6.999999990796823 14.000000000448381 6.999999990796823 17.000000000448381 9.999999990796823 17.000000000448381 11.999999990796823 19.000000000448381 13.999999990796823 17.000000000448381 16.999999990796823 17.000000000448381 16.999999990796823 14.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SunBrightnessSquare2.displayName = 'SunBrightnessSquare2';

export default SunBrightnessSquare2;
export { SunBrightnessSquare2 };
