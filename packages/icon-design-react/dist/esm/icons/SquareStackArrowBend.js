import { createElement, forwardRef } from 'react';

const SquareStackArrowBend = forwardRef(function SquareStackArrowBend(
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
    createElement('path', {"d":"M15 12L17 14L15 16","key":"0"}),
    createElement('path', {"d":"M11 17L11 19C11 20.105 11.895 21 13 21L20 21C21.105 21 22 20.105 22 19L22 9C22 7.895 21.105 7 20 7L13 7C11.895 7 11 7.895 11 9L11 10","key":"1"}),
    createElement('path', {"d":"M13 7L13 5C13 3.895 12.105 3 11 3L4 3C2.895 3 2 3.895 2 5L2 16C2 17.105 2.895 18 4 18L11 18","key":"2"}),
    createElement('path', {"d":"M7 9L7 10C7 12.211 8.789 14 11 14L17 14","key":"3"})
  );
});

SquareStackArrowBend.displayName = 'SquareStackArrowBend';

export default SquareStackArrowBend;
export { SquareStackArrowBend };
