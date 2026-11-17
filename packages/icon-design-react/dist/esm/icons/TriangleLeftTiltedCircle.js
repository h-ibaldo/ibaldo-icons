import { createElement, forwardRef } from 'react';

const TriangleLeftTiltedCircle = forwardRef(function TriangleLeftTiltedCircle(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M8.289 12.711L12.711 8.289C13.27 7.73 14.223 8.008 14.395 8.777L15.66 14.465C15.816 15.18 15.18 15.816 14.465 15.66L8.777 14.395C8.008 14.223 7.73 13.27 8.289 12.711Z","key":"1"})
  );
});

TriangleLeftTiltedCircle.displayName = 'TriangleLeftTiltedCircle';

export default TriangleLeftTiltedCircle;
export { TriangleLeftTiltedCircle };
