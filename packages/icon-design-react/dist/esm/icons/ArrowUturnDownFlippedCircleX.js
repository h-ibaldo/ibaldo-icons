import { createElement, forwardRef } from 'react';

const ArrowUturnDownFlippedCircleX = forwardRef(function ArrowUturnDownFlippedCircleX(
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
    createElement('path', {"d":"M22 18L18 22","key":"0"}),
    createElement('path', {"d":"M18 18L22 22","key":"1"}),
    createElement('path', {"d":"M7 13L10 16L13 13","key":"2"}),
    createElement('path', {"d":"M10 16L10 11.5C10 9.566 11.566 8 13.5 8C15.434 8 17 9.566 17 11.5L17 12","key":"3"}),
    createElement('path', {"d":"M21.793 14C21.926 13.352 22 12.688 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C12.688 22 13.352 21.926 14 21.793","key":"4"})
  );
});

ArrowUturnDownFlippedCircleX.displayName = 'ArrowUturnDownFlippedCircleX';

export default ArrowUturnDownFlippedCircleX;
export { ArrowUturnDownFlippedCircleX };
