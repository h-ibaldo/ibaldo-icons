import { createElement, forwardRef } from 'react';

const ArrowUturnLeftFlippedCircle = forwardRef(function ArrowUturnLeftFlippedCircle(
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
    createElement('path', {"d":"M11 18L8 15L11 12","key":"0"}),
    createElement('path', {"d":"M8 15L13 15C15.211 15 17 13.211 17 11C17 8.789 15.211 7 13 7L11 7","key":"1"}),
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"2"})
  );
});

ArrowUturnLeftFlippedCircle.displayName = 'ArrowUturnLeftFlippedCircle';

export default ArrowUturnLeftFlippedCircle;
export { ArrowUturnLeftFlippedCircle };
