import { createElement, forwardRef } from 'react';

const ArrowClockwiseSquare = forwardRef(function ArrowClockwiseSquare(
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
    createElement('path', {"d":"M17 13L14 10C12.344 8.344 9.656 8.344 8 10C6.344 11.656 6.344 14.344 8 16L9 17","key":"1"}),
    createElement('path', {"d":"M13 13L17 13L17 9","key":"2"})
  );
});

ArrowClockwiseSquare.displayName = 'ArrowClockwiseSquare';

export default ArrowClockwiseSquare;
export { ArrowClockwiseSquare };
