import { createElement, forwardRef } from 'react';

const ArrowLeftRightCircle = forwardRef(function ArrowLeftRightCircle(
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
    createElement('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement('path', {"d":"M14 11L16 9L14 7","key":"1"}),
    createElement('path', {"d":"M8 9L16 9","key":"2"}),
    createElement('path', {"d":"M10 13L8 15L10 17","key":"3"}),
    createElement('path', {"d":"M16 15L8 15","key":"4"})
  );
});

ArrowLeftRightCircle.displayName = 'ArrowLeftRightCircle';

export default ArrowLeftRightCircle;
export { ArrowLeftRightCircle };
