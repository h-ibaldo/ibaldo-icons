import { createElement, forwardRef } from 'react';

const ArrowUturnUpFlippedSquare = forwardRef(function ArrowUturnUpFlippedSquare(
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
    createElement('path', {"d":"M5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22Z","key":"0"}),
    createElement('path', {"d":"M6 11L9 8L12 11","key":"1"}),
    createElement('path', {"d":"M9 8L9 13C9 15.211 10.789 17 13 17C15.211 17 17 15.211 17 13L17 11","key":"2"})
  );
});

ArrowUturnUpFlippedSquare.displayName = 'ArrowUturnUpFlippedSquare';

export default ArrowUturnUpFlippedSquare;
export { ArrowUturnUpFlippedSquare };
