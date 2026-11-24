import { createElement, forwardRef } from 'react';

const ListCheckDash = forwardRef(function ListCheckDash(
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
    createElement('path', {"d":"M8 5L14 5","key":"0"}),
    createElement('path', {"d":"M8 10L14 10","key":"1"}),
    createElement('path', {"d":"M3 5L4 5","key":"2"}),
    createElement('path', {"d":"M3 10L4 10","key":"3"}),
    createElement('path', {"d":"M8 15L14 15","key":"4"}),
    createElement('path', {"d":"M3 15L4 15","key":"5"}),
    createElement('path', {"d":"M16 19L18 21L21.5 16.5","key":"6"})
  );
});

ListCheckDash.displayName = 'ListCheckDash';

export default ListCheckDash;
export { ListCheckDash };
