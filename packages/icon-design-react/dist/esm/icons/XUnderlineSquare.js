import { createElement, forwardRef } from 'react';

const XUnderlineSquare = forwardRef(function XUnderlineSquare(
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
    createElement('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement('path', {"d":"M8 16L16 16","key":"1"}),
    createElement('path', {"d":"M10 12L14 8","key":"2"}),
    createElement('path', {"d":"M14 12L10 8","key":"3"})
  );
});

XUnderlineSquare.displayName = 'XUnderlineSquare';

export default XUnderlineSquare;
export { XUnderlineSquare };
