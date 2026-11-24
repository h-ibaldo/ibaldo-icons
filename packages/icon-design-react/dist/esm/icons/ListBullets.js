import { createElement, forwardRef } from 'react';

const ListBullets = forwardRef(function ListBullets(
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
    createElement('path', {"d":"M8 4L21 4","key":"0"}),
    createElement('path', {"d":"M8 12L21 12","key":"1"}),
    createElement('path', {"d":"M8 20L21 20","key":"2"}),
    createElement('path', {"d":"M3 4L3 4","key":"3"}),
    createElement('path', {"d":"M3 12L3 12","key":"4"}),
    createElement('path', {"d":"M3 20L3 20","key":"5"})
  );
});

ListBullets.displayName = 'ListBullets';

export default ListBullets;
export { ListBullets };
