import { createElement, forwardRef } from 'react';

const SquareCheckCircle = forwardRef(function SquareCheckCircle(
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
    createElement('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z","key":"0"}),
    createElement('path', {"d":"M15.25 7L16.418 8.168L18.75 5.832","key":"1"}),
    createElement('path', {"d":"M20 15L20 19C20 20.656 18.656 22 17 22L5 22C3.344 22 2 20.656 2 19L2 7C2 5.344 3.344 4 5 4L9 4","key":"2"})
  );
});

SquareCheckCircle.displayName = 'SquareCheckCircle';

export default SquareCheckCircle;
export { SquareCheckCircle };
