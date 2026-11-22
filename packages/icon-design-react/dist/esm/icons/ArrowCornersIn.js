import { createElement, forwardRef } from 'react';

const ArrowCornersIn = forwardRef(function ArrowCornersIn(
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
    createElement('path', {"d":"M22 22L15 15","key":"0"}),
    createElement('path', {"d":"M9 9L2 2","key":"1"}),
    createElement('path', {"d":"M9 4L9 9L4 9","key":"2"}),
    createElement('path', {"d":"M15 20L15 15L20 15","key":"3"}),
    createElement('path', {"d":"M22 2L15 9","key":"4"}),
    createElement('path', {"d":"M9 15L2 22","key":"5"}),
    createElement('path', {"d":"M4 15L9 15L9 20","key":"6"}),
    createElement('path', {"d":"M20 9L15 9L15 4","key":"7"})
  );
});

ArrowCornersIn.displayName = 'ArrowCornersIn';

export default ArrowCornersIn;
export { ArrowCornersIn };
