import { createElement, forwardRef } from 'react';

const ArrowDownToDotCircle = forwardRef(function ArrowDownToDotCircle(
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
    createElement('path', {"d":"M15 11L12 14L9 11","key":"0"}),
    createElement('path', {"d":"M12 7L12 14","key":"1"}),
    createElement('path', {"d":"M14 20C14 18.895 13.105 18 12 18C10.895 18 10 18.895 10 20C10 21.105 10.895 22 12 22C13.105 22 14 21.105 14 20Z","key":"2"}),
    createElement('path', {"d":"M18 19.984C20.426 18.16 22 15.27 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 15.27 3.574 18.16 6 19.984","key":"3"})
  );
});

ArrowDownToDotCircle.displayName = 'ArrowDownToDotCircle';

export default ArrowDownToDotCircle;
export { ArrowDownToDotCircle };
