import { createElement, forwardRef } from 'react';

const ArrowUturnDownCircle = forwardRef(function ArrowUturnDownCircle(
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
    createElement('path', {"d":"M18 13L15 16L12 13","key":"0"}),
    createElement('path', {"d":"M15 16L15 11C15 8.789 13.211 7 11 7C8.789 7 7 8.789 7 11L7 13","key":"1"}),
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"2"})
  );
});

ArrowUturnDownCircle.displayName = 'ArrowUturnDownCircle';

export default ArrowUturnDownCircle;
export { ArrowUturnDownCircle };
