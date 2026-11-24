import { createElement, forwardRef } from 'react';

const ListRightDash = forwardRef(function ListRightDash(
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
    createElement('path', {"d":"M15 4L3 4","key":"0"}),
    createElement('path', {"d":"M15 12L3 12","key":"1"}),
    createElement('path', {"d":"M15 20L3 20","key":"2"}),
    createElement('path', {"d":"M21 4L20 4","key":"3"}),
    createElement('path', {"d":"M21 12L20 12","key":"4"}),
    createElement('path', {"d":"M21 20L20 20","key":"5"})
  );
});

ListRightDash.displayName = 'ListRightDash';

export default ListRightDash;
export { ListRightDash };
