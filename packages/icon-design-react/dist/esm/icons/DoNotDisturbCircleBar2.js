import { forwardRef } from 'react';

const DoNotDisturbCircleBar2 = forwardRef(({
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
    <circle cx="12.025268548975873" cy="11.997565476121054" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="6.025268548975873" y="9.997565476121054" width="12" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

DoNotDisturbCircleBar2.displayName = 'DoNotDisturbCircleBar2';

export default DoNotDisturbCircleBar2;
export { DoNotDisturbCircleBar2 };
