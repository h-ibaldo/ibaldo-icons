import { createElement, forwardRef } from 'react';

const ArrowLeftCircleLarge = forwardRef(function ArrowLeftCircleLarge(
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
    createElement('path', {"d":"M12 17L7 12L12 7","key":"0"}),
    createElement('path', {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z","key":"1"}),
    createElement('path', {"d":"M17 12L7 12","key":"2"})
  );
});

ArrowLeftCircleLarge.displayName = 'ArrowLeftCircleLarge';

export default ArrowLeftCircleLarge;
export { ArrowLeftCircleLarge };
