import { createElement, forwardRef } from 'react';

const ArrowUturnRightSquare = forwardRef(function ArrowUturnRightSquare(
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
    createElement('path', {"d":"M2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement('path', {"d":"M13 6L16 9L13 12","key":"1"}),
    createElement('path', {"d":"M16 9L11 9C8.789 9 7 10.789 7 13C7 15.211 8.789 17 11 17L13 17","key":"2"})
  );
});

ArrowUturnRightSquare.displayName = 'ArrowUturnRightSquare';

export default ArrowUturnRightSquare;
export { ArrowUturnRightSquare };
