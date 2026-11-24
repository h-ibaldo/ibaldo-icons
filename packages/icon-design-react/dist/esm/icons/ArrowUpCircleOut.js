import { createElement, forwardRef } from 'react';

const ArrowUpCircleOut = forwardRef(function ArrowUpCircleOut(
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
    createElement('path', {"d":"M9 6L12 3L15 6","key":"0"}),
    createElement('path', {"d":"M12 15L12 3","key":"1"}),
    createElement('path', {"d":"M18 3.02C20.426 4.844 22 7.73 22 11C22 16.523 17.523 21 12 21C6.477 21 2 16.523 2 11C2 7.73 3.574 4.844 6 3.02","key":"2"})
  );
});

ArrowUpCircleOut.displayName = 'ArrowUpCircleOut';

export default ArrowUpCircleOut;
export { ArrowUpCircleOut };
