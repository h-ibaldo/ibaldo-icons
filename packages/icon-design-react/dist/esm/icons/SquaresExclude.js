import { createElement, forwardRef } from 'react';

const SquaresExclude = forwardRef(function SquaresExclude(
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
    createElement('path', {"d":"M4 16C2.895 16 2 15.105 2 14L2 4C2 2.895 2.895 2 4 2L14 2C15.105 2 16 2.895 16 4L16 8","key":"0"}),
    createElement('path', {"d":"M8 16L14 16C15.105 16 16 15.105 16 14L16 12","key":"1"}),
    createElement('path', {"d":"M16 8L10 8C8.895 8 8 8.895 8 10L8 12","key":"2"}),
    createElement('path', {"d":"M20 8C21.105 8 22 8.895 22 10L22 20C22 21.105 21.105 22 20 22L10 22C8.895 22 8 21.105 8 20L8 16","key":"3"})
  );
});

SquaresExclude.displayName = 'SquaresExclude';

export default SquaresExclude;
export { SquaresExclude };
