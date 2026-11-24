import { createElement, forwardRef } from 'react';

const ArrowUpFromPointCircle = forwardRef(function ArrowUpFromPointCircle(
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
    createElement('path', {"d":"M9 5L12 2L15 5","key":"0"}),
    createElement('path', {"d":"M12 11L12 2","key":"1"}),
    createElement('path', {"d":"M12 15L12 15","key":"2"}),
    createElement('path', {"d":"M5 4.883C3.152 6.695 2 9.207 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 9.207 20.848 6.695 19 4.883","key":"3"})
  );
});

ArrowUpFromPointCircle.displayName = 'ArrowUpFromPointCircle';

export default ArrowUpFromPointCircle;
export { ArrowUpFromPointCircle };
