import { createElement, forwardRef } from 'react';

const ArrowUturnDownFlippedSquare = forwardRef(function ArrowUturnDownFlippedSquare(
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
    createElement('path', {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"0"}),
    createElement('path', {"d":"M6 13L9 16L12 13","key":"1"}),
    createElement('path', {"d":"M9 16L9 11C9 8.789 10.789 7 13 7C15.211 7 17 8.789 17 11L17 13","key":"2"})
  );
});

ArrowUturnDownFlippedSquare.displayName = 'ArrowUturnDownFlippedSquare';

export default ArrowUturnDownFlippedSquare;
export { ArrowUturnDownFlippedSquare };
