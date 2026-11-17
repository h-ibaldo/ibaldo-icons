import { createElement, forwardRef } from 'react';

const ArrowDownFromPointCircle = forwardRef(function ArrowDownFromPointCircle(
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
    createElement('path', {"d":"M15 19L12 22L9 19","key":"0"}),
    createElement('path', {"d":"M12 13L12 22","key":"1"}),
    createElement('path', {"d":"M12 9L12 9","key":"2"}),
    createElement('path', {"d":"M19 19.117C20.848 17.305 22 14.793 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 14.793 3.152 17.305 5 19.117","key":"3"})
  );
});

ArrowDownFromPointCircle.displayName = 'ArrowDownFromPointCircle';

export default ArrowDownFromPointCircle;
export { ArrowDownFromPointCircle };
