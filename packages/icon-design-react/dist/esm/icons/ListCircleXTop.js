import { createElement, forwardRef } from 'react';

const ListCircleXTop = forwardRef(function ListCircleXTop(
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
    createElement('path', {"d":"M6.117 12C6.117 13.105 5.223 14 4.117 14C3.016 14 2.117 13.105 2.117 12C2.117 10.895 3.016 10 4.117 10C5.223 10 6.117 10.895 6.117 12Z","key":"0"}),
    createElement('path', {"d":"M6.117 20C6.117 21.105 5.223 22 4.117 22C3.016 22 2.117 21.105 2.117 20C2.117 18.895 3.016 18 4.117 18C5.223 18 6.117 18.895 6.117 20Z","key":"1"}),
    createElement('path', {"d":"M10.117 4L22.117 4","key":"2"}),
    createElement('path', {"d":"M10.117 12L22.117 12","key":"3"}),
    createElement('path', {"d":"M10.117 20L22.117 20","key":"4"}),
    createElement('path', {"d":"M6.117 2L2.117 6","key":"5"}),
    createElement('path', {"d":"M2.117 2L6.117 6","key":"6"})
  );
});

ListCircleXTop.displayName = 'ListCircleXTop';

export default ListCircleXTop;
export { ListCircleXTop };
