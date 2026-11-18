import { createElement, forwardRef } from 'react';

const TriangleRightTiltedCircle = forwardRef(function TriangleRightTiltedCircle(
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
    createElement('path', {"d":"M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z","key":"0"}),
    createElement('path', {"d":"M15.711 12.711L11.289 8.289C10.73 7.73 9.777 8.008 9.605 8.777L8.34 14.465C8.184 15.18 8.82 15.816 9.535 15.66L15.223 14.395C15.992 14.223 16.27 13.27 15.711 12.711Z","key":"1"})
  );
});

TriangleRightTiltedCircle.displayName = 'TriangleRightTiltedCircle';

export default TriangleRightTiltedCircle;
export { TriangleRightTiltedCircle };
