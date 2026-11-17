import { createElement, forwardRef } from 'react';

const ArrowCounterclockwiseFive = forwardRef(function ArrowCounterclockwiseFive(
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
    createElement('path', {"d":"M14 8L10 8L10 11.5L11.75 11.5C12.992 11.5 14 12.508 14 13.75C14 14.992 12.992 16 11.75 16L10 16","key":"0"}),
    createElement('path', {"d":"M5 2L5 5L8 5","key":"1"}),
    createElement('path', {"d":"M5 4.875C6.805 3.102 9.27 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 10.953 2.16 9.945 2.461 9","key":"2"})
  );
});

ArrowCounterclockwiseFive.displayName = 'ArrowCounterclockwiseFive';

export default ArrowCounterclockwiseFive;
export { ArrowCounterclockwiseFive };
