import { createElement, forwardRef } from 'react';

const ListCircleXBottom = forwardRef(function ListCircleXBottom(
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
    createElement('path', {"d":"M6.117 12C6.117 10.895 5.223 10 4.117 10C3.016 10 2.117 10.895 2.117 12C2.117 13.105 3.016 14 4.117 14C5.223 14 6.117 13.105 6.117 12Z","key":"0"}),
    createElement('path', {"d":"M6.117 4C6.117 2.895 5.223 2 4.117 2C3.016 2 2.117 2.895 2.117 4C2.117 5.105 3.016 6 4.117 6C5.223 6 6.117 5.105 6.117 4Z","key":"1"}),
    createElement('path', {"d":"M10.117 20L22.117 20","key":"2"}),
    createElement('path', {"d":"M10.117 12L22.117 12","key":"3"}),
    createElement('path', {"d":"M10.117 4L22.117 4","key":"4"}),
    createElement('path', {"d":"M6.117 22L2.117 18","key":"5"}),
    createElement('path', {"d":"M2.117 22L6.117 18","key":"6"})
  );
});

ListCircleXBottom.displayName = 'ListCircleXBottom';

export default ListCircleXBottom;
export { ListCircleXBottom };
