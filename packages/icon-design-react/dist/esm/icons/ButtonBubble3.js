import { forwardRef } from 'react';

const ButtonBubble3 = forwardRef(({
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
    <rect x="1.999999995180133" y="6.999999996999868" width="20" height="10.000000007293337" rx="4.999995005749084" ry="4.999995005749084" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ButtonBubble3.displayName = 'ButtonBubble3';

export default ButtonBubble3;
export { ButtonBubble3 };
