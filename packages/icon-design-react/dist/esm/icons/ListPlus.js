import { createElement, forwardRef } from 'react';

const ListPlus = forwardRef(function ListPlus(
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
    createElement('path', {"d":"M2 4L22 4","key":"0"}),
    createElement('path', {"d":"M2 12L11 12","key":"1"}),
    createElement('path', {"d":"M16 12L22 12","key":"2"}),
    createElement('path', {"d":"M16 12L22 12","key":"3"}),
    createElement('path', {"d":"M19 9L19 15","key":"4"}),
    createElement('path', {"d":"M2 20L22 20","key":"5"})
  );
});

ListPlus.displayName = 'ListPlus';

export default ListPlus;
export { ListPlus };
