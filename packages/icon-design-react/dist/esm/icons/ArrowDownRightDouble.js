import { createElement, forwardRef } from 'react';

const ArrowDownRightDouble = forwardRef(function ArrowDownRightDouble(
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
    createElement('path', {"d":"M20 8L20 20L8 20","key":"0"}),
    createElement('path', {"d":"M16 4L16 16L4 16","key":"1"}),
    createElement('path', {"d":"M16 16L4 4","key":"2"})
  );
});

ArrowDownRightDouble.displayName = 'ArrowDownRightDouble';

export default ArrowDownRightDouble;
export { ArrowDownRightDouble };
