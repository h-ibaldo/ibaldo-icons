import { createElement, forwardRef } from 'react';

const ArrowDownDouble = forwardRef(function ArrowDownDouble(
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
    createElement('path', {"d":"M20 14L12 22L4 14","key":"0"}),
    createElement('path', {"d":"M20 8L12 16L4 8","key":"1"}),
    createElement('path', {"d":"M12 2L12 16","key":"2"})
  );
});

ArrowDownDouble.displayName = 'ArrowDownDouble';

export default ArrowDownDouble;
export { ArrowDownDouble };
