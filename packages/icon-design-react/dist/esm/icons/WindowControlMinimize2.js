import { forwardRef } from 'react';

const WindowControlMinimize2 = forwardRef(({
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
    <line x1="18.94946288328174" y1="18.998779303956326" x2="4.94946288328174" y2="18.998779303956326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WindowControlMinimize2.displayName = 'WindowControlMinimize2';

export default WindowControlMinimize2;
export { WindowControlMinimize2 };
