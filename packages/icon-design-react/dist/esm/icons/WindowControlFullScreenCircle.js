import { forwardRef } from 'react';

const WindowControlFullscreenCircle = forwardRef(({
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
    <circle cx="12.000000002980414" cy="11.998779299186936" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.000000002980414 11.998779299186936 8.000000002980414 7.998779299186936 12.000000002980414 7.998779299186936" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.000000002980414 11.998779299186936 16.000000002980414 15.998779299186936 12.000000002980414 15.998779299186936" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WindowControlFullscreenCircle.displayName = 'WindowControlFullscreenCircle';

export default WindowControlFullscreenCircle;
export { WindowControlFullscreenCircle };
