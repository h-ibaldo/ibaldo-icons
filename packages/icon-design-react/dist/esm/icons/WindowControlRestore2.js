import { forwardRef } from 'react';

const WindowControlRestore2 = forwardRef(({
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
    <path d="M14.949462887261689,18.998779299481612v2.000000000003638c0,.552284749828686-.447715250169495,1-1,1H2.949462887261689c-.552284749830505,0-1-.447715250171314-1-1v-11c0-.552284749832324.447715250169495-1,1-1h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="8.949462887261689" y="1.99877929948525" width="13" height="13" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WindowControlRestore2.displayName = 'WindowControlRestore2';

export default WindowControlRestore2;
export { WindowControlRestore2 };
