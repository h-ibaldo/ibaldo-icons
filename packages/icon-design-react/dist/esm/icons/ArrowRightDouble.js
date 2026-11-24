import { createElement, forwardRef } from 'react';

const ArrowRightDouble = forwardRef(function ArrowRightDouble(
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
    createElement('path', {"d":"M14 4L22 12L14 20","key":"0"}),
    createElement('path', {"d":"M8 4L16 12L8 20","key":"1"}),
    createElement('path', {"d":"M2 12L16 12","key":"2"})
  );
});

ArrowRightDouble.displayName = 'ArrowRightDouble';

export default ArrowRightDouble;
export { ArrowRightDouble };
