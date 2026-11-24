import { createElement, forwardRef } from 'react';

const ArrowUturnUpFlippedCircleX = forwardRef(function ArrowUturnUpFlippedCircleX(
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
    createElement('path', {"d":"M22 6L18 2","key":"0"}),
    createElement('path', {"d":"M18 6L22 2","key":"1"}),
    createElement('path', {"d":"M7 11L10 8L13 11","key":"2"}),
    createElement('path', {"d":"M10 8L10 12.5C10 14.434 11.566 16 13.5 16C15.434 16 17 14.434 17 12.5L17 12","key":"3"}),
    createElement('path', {"d":"M21.793 10C21.926 10.648 22 11.313 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C12.688 2 13.352 2.074 14 2.207","key":"4"})
  );
});

ArrowUturnUpFlippedCircleX.displayName = 'ArrowUturnUpFlippedCircleX';

export default ArrowUturnUpFlippedCircleX;
export { ArrowUturnUpFlippedCircleX };
