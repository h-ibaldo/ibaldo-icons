import { createElement, forwardRef } from 'react';

const SquareColumnsThreeDashed = forwardRef(function SquareColumnsThreeDashed(
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
    createElement('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement('path', {"d":"M15 22L15 20","key":"1"}),
    createElement('path', {"d":"M15 16L15 14","key":"2"}),
    createElement('path', {"d":"M15 10L15 8","key":"3"}),
    createElement('path', {"d":"M15 4L15 2","key":"4"}),
    createElement('path', {"d":"M9 22L9 20","key":"5"}),
    createElement('path', {"d":"M9 16L9 14","key":"6"}),
    createElement('path', {"d":"M9 10L9 8","key":"7"}),
    createElement('path', {"d":"M9 4L9 2","key":"8"})
  );
});

SquareColumnsThreeDashed.displayName = 'SquareColumnsThreeDashed';

export default SquareColumnsThreeDashed;
export { SquareColumnsThreeDashed };
