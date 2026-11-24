import { createElement, forwardRef } from 'react';

const ArrowDownRightSlim = forwardRef(function ArrowDownRightSlim(
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
    createElement('path', {"d":"M18 14L18 18L14 18","key":"0"}),
    createElement('path', {"d":"M18 18L6 6","key":"1"})
  );
});

ArrowDownRightSlim.displayName = 'ArrowDownRightSlim';

export default ArrowDownRightSlim;
export { ArrowDownRightSlim };
