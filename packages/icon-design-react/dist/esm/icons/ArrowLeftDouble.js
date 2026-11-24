import { createElement, forwardRef } from 'react';

const ArrowLeftDouble = forwardRef(function ArrowLeftDouble(
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
    createElement('path', {"d":"M10 20L2 12L10 4","key":"0"}),
    createElement('path', {"d":"M16 20L8 12L16 4","key":"1"}),
    createElement('path', {"d":"M22 12L8 12","key":"2"})
  );
});

ArrowLeftDouble.displayName = 'ArrowLeftDouble';

export default ArrowLeftDouble;
export { ArrowLeftDouble };
