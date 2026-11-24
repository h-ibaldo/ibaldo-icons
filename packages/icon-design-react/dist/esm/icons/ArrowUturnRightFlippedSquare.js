import { createElement, forwardRef } from 'react';

const ArrowUturnRightFlippedSquare = forwardRef(function ArrowUturnRightFlippedSquare(
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
    createElement('path', {"d":"M2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19Z","key":"0"}),
    createElement('path', {"d":"M13 18L16 15L13 12","key":"1"}),
    createElement('path', {"d":"M16 15L11 15C8.789 15 7 13.211 7 11C7 8.789 8.789 7 11 7L13 7","key":"2"})
  );
});

ArrowUturnRightFlippedSquare.displayName = 'ArrowUturnRightFlippedSquare';

export default ArrowUturnRightFlippedSquare;
export { ArrowUturnRightFlippedSquare };
