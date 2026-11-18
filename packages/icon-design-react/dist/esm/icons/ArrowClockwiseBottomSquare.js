import { createElement, forwardRef } from 'react';

const ArrowClockwiseBottomSquare = forwardRef(function ArrowClockwiseBottomSquare(
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
    createElement('path', {"d":"M19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2Z","key":"0"}),
    createElement('path', {"d":"M7 11L10 14C11.656 15.656 14.344 15.656 16 14C17.656 12.344 17.656 9.656 16 8L15 7","key":"1"}),
    createElement('path', {"d":"M11 11L7 11L7 15","key":"2"})
  );
});

ArrowClockwiseBottomSquare.displayName = 'ArrowClockwiseBottomSquare';

export default ArrowClockwiseBottomSquare;
export { ArrowClockwiseBottomSquare };
