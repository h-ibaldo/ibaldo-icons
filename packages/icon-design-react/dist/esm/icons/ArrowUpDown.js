import { createElement, forwardRef } from 'react';

const ArrowUpDown = forwardRef(function ArrowUpDown(
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
    createElement('path', {"d":"M17 5L17 20","key":"0"}),
    createElement('path', {"d":"M14 17L17 20L20 17","key":"1"}),
    createElement('path', {"d":"M10 7.5L7 4.5L4 7.5","key":"2"}),
    createElement('path', {"d":"M7 19L7 4.5","key":"3"})
  );
});

ArrowUpDown.displayName = 'ArrowUpDown';

export default ArrowUpDown;
export { ArrowUpDown };
