import { createElement, forwardRef } from 'react';

const ListXSquareCenter = forwardRef(function ListXSquareCenter(
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
    createElement('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement('path', {"d":"M10 10L13.5 6.5","key":"1"}),
    createElement('path', {"d":"M13.5 10L10 6.5","key":"2"}),
    createElement('path', {"d":"M7 14L17 14","key":"3"}),
    createElement('path', {"d":"M7 18L17 18","key":"4"})
  );
});

ListXSquareCenter.displayName = 'ListXSquareCenter';

export default ListXSquareCenter;
export { ListXSquareCenter };
