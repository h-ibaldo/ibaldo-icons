import { createElement, forwardRef } from 'react';

const ArrowUturnLeftSquare = forwardRef(function ArrowUturnLeftSquare(
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
    createElement('path', {"d":"M22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5Z","key":"0"}),
    createElement('path', {"d":"M11 6L8 9L11 12","key":"1"}),
    createElement('path', {"d":"M8 9L13 9C15.211 9 17 10.789 17 13C17 15.211 15.211 17 13 17L11 17","key":"2"})
  );
});

ArrowUturnLeftSquare.displayName = 'ArrowUturnLeftSquare';

export default ArrowUturnLeftSquare;
export { ArrowUturnLeftSquare };
