import { createElement, forwardRef } from 'react';

const SquareStackSquareDashed = forwardRef(function SquareStackSquareDashed(
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
    createElement('path', {"d":"M10 22L14 22","key":"0"}),
    createElement('path', {"d":"M22 6.5L22 5C22 3.344 20.656 2 19 2L18 2","key":"1"}),
    createElement('path', {"d":"M2 10.5L2 14.5","key":"2"}),
    createElement('path', {"d":"M6 2L5 2C3.344 2 2 3.344 2 5L2 6.5","key":"3"}),
    createElement('path', {"d":"M18 22L19 22C20.656 22 22 20.656 22 19L22 18.5","key":"4"}),
    createElement('path', {"d":"M2 18.5L2 19C2 20.656 3.344 22 5 22L6 22","key":"5"}),
    createElement('path', {"d":"M14 2L10 2","key":"6"}),
    createElement('path', {"d":"M22 14.5L22 10.5","key":"7"}),
    createElement('path', {"d":"M12 18L16 18C17.105 18 18 17.105 18 16L18 12C18 10.895 17.105 10 16 10L12 10C10.895 10 10 10.895 10 12L10 16C10 17.105 10.895 18 12 18Z","key":"8"}),
    createElement('path', {"d":"M14 10L14 8C14 6.895 13.105 6 12 6L8 6C6.895 6 6 6.895 6 8L6 12C6 13.105 6.895 14 8 14L10 14","key":"9"})
  );
});

SquareStackSquareDashed.displayName = 'SquareStackSquareDashed';

export default SquareStackSquareDashed;
export { SquareStackSquareDashed };
