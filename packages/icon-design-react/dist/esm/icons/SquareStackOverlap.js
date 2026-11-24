import { createElement, forwardRef } from 'react';

const SquareStackOverlap = forwardRef(function SquareStackOverlap(
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
    createElement('path', {"d":"M10 16L20 16C21.105 16 22 15.105 22 14L22 4C22 2.895 21.105 2 20 2L10 2C8.895 2 8 2.895 8 4L8 14C8 15.105 8.895 16 10 16Z","key":"0"}),
    createElement('path', {"d":"M8 8L4 8C2.895 8 2 8.895 2 10L2 20C2 21.105 2.895 22 4 22L14 22C15.105 22 16 21.105 16 20L16 16","key":"1"})
  );
});

SquareStackOverlap.displayName = 'SquareStackOverlap';

export default SquareStackOverlap;
export { SquareStackOverlap };
