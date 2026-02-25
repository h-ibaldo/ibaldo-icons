import { forwardRef } from 'react';

const WindowControlFullScreenTriangles2 = forwardRef(({
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
    <polygon points="9.974731417511066 1.998779298535737 1.974731417511066 1.998779298535737 1.974731417511066 9.998779298535737 9.974731417511066 1.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="13.97473488191099 21.998778259117898 21.974731417813018 21.998778259117898 21.974731417813018 13.998781723219508 13.97473488191099 21.998778259117898" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WindowControlFullScreenTriangles2.displayName = 'WindowControlFullScreenTriangles2';

export default WindowControlFullScreenTriangles2;
export { WindowControlFullScreenTriangles2 };
