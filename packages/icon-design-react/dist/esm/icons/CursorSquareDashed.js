import { createElement, forwardRef } from 'react';

const CursorSquareDashed = forwardRef(function CursorSquareDashed(
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
    createElement('path', {"d":"M11.633 14.863L8.879 15.82L11.168 20.023L7.566 21.988L5.273 17.785L2.977 19.586C2.582 19.895 2 19.613 2 19.109L2 8.605C2 8.129 2.531 7.84 2.93 8.098L11.762 13.785C12.188 14.059 12.109 14.699 11.633 14.863Z","key":"0"}),
    createElement('path', {"d":"M2 4L2 3C2 2.445 2.449 2 3 2L4 2","key":"1"}),
    createElement('path', {"d":"M8 2L10 2","key":"2"}),
    createElement('path', {"d":"M14 2L16 2","key":"3"}),
    createElement('path', {"d":"M20 2L21 2C21.551 2 22 2.445 22 3L22 4","key":"4"}),
    createElement('path', {"d":"M22 8L22 10","key":"5"}),
    createElement('path', {"d":"M22 14L22 16","key":"6"}),
    createElement('path', {"d":"M22 20L22 21C22 21.555 21.551 22 21 22L20 22","key":"7"}),
    createElement('path', {"d":"M16 22L14 22","key":"8"})
  );
});

CursorSquareDashed.displayName = 'CursorSquareDashed';

export default CursorSquareDashed;
export { CursorSquareDashed };
