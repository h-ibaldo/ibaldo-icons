import { createElement, forwardRef } from 'react';

const Text3DSquareSmall = forwardRef(function Text3DSquareSmall(
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
    createElement('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement('path', {"d":"M6 9C6 9 7 8 8 8C9.105 8 10 8.895 10 10C10 11.105 9.105 12 8 12","key":"1"}),
    createElement('path', {"d":"M6 15C6 15 6.895 16 8 16C9.105 16 10 15.105 10 14C10 12.895 9.105 12 8 12","key":"2"}),
    createElement('path', {"d":"M15 16L14 16L14 8L15 8C16.656 8 18 9.344 18 11L18 13C18 14.656 16.656 16 15 16Z","key":"3"})
  );
});

Text3DSquareSmall.displayName = 'Text3DSquareSmall';

export default Text3DSquareSmall;
export { Text3DSquareSmall };
