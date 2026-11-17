import { createElement, forwardRef } from 'react';

const ListDividerDash = forwardRef(function ListDividerDash(
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
    createElement('path', {"d":"M9 3L21 3","key":"0"}),
    createElement('path', {"d":"M3 12L21 12","key":"1"}),
    createElement('path', {"d":"M9 21L21 21","key":"2"}),
    createElement('path', {"d":"M3 3L4 3","key":"3"}),
    createElement('path', {"d":"M9 7L21 7","key":"4"}),
    createElement('path', {"d":"M3 7L4 7","key":"5"}),
    createElement('path', {"d":"M9 17L21 17","key":"6"}),
    createElement('path', {"d":"M3 17L4 17","key":"7"}),
    createElement('path', {"d":"M3 21L4 21","key":"8"})
  );
});

ListDividerDash.displayName = 'ListDividerDash';

export default ListDividerDash;
export { ListDividerDash };
