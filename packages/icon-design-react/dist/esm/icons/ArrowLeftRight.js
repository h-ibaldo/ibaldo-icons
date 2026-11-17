import { createElement, forwardRef } from 'react';

const ArrowLeftRight = forwardRef(function ArrowLeftRight(
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
    createElement('path', {"d":"M20 8L4 8","key":"0"}),
    createElement('path', {"d":"M7 11L4 8L7 5","key":"1"}),
    createElement('path', {"d":"M17 14L20 17L17 20","key":"2"}),
    createElement('path', {"d":"M4 17L20 17","key":"3"})
  );
});

ArrowLeftRight.displayName = 'ArrowLeftRight';

export default ArrowLeftRight;
export { ArrowLeftRight };
