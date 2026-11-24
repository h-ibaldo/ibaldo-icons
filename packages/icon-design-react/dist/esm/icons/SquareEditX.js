import { createElement, forwardRef } from 'react';

const SquareEditX = forwardRef(function SquareEditX(
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
    createElement('path', {"d":"M21.707 12.879L20.121 11.293C19.728 10.899 19.089 10.903 18.7 11.301L11 19L11 22L14 22L21.715 14.285C22.098 13.893 22.095 13.266 21.707 12.879Z","key":"0"}),
    createElement('path', {"d":"M7 18L5 18C3.895 18 3 17.105 3 16L3 4C3 2.895 3.895 2 5 2L17 2C18.105 2 19 2.895 19 4L19 7","key":"1"}),
    createElement('path', {"d":"M9 12L13 8","key":"2"}),
    createElement('path', {"d":"M13 12L9 8","key":"3"})
  );
});

SquareEditX.displayName = 'SquareEditX';

export default SquareEditX;
export { SquareEditX };
