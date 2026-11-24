import { createElement, forwardRef } from 'react';

const FolderClockCorner = forwardRef(function FolderClockCorner(
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
    createElement('path', {"d":"M9 21L4 21C2.895 21 2 20.105 2 19L2 5C2 3.895 2.895 3 4 3L7.93 3C8.598 3 9.223 3.336 9.594 3.891L10.406 5.109C10.777 5.664 11.402 6 12.07 6L20 6C21.105 6 22 6.895 22 8L22 10","key":"0"}),
    createElement('path', {"d":"M21 16C21 18.762 18.762 21 16 21C13.238 21 11 18.762 11 16C11 13.238 13.238 11 16 11C18.762 11 21 13.238 21 16Z","key":"1"}),
    createElement('path', {"d":"M16 14L16 16L18 16","key":"2"})
  );
});

FolderClockCorner.displayName = 'FolderClockCorner';

export default FolderClockCorner;
export { FolderClockCorner };
