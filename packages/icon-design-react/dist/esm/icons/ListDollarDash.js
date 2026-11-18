import { createElement, forwardRef } from 'react';

const ListDollarDash = forwardRef(function ListDollarDash(
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
    createElement('path', {"d":"M8 4L14 4","key":"0"}),
    createElement('path', {"d":"M8 9L14 9","key":"1"}),
    createElement('path', {"d":"M3 4L4 4","key":"2"}),
    createElement('path', {"d":"M3 9L4 9","key":"3"}),
    createElement('path', {"d":"M8 14L14 14","key":"4"}),
    createElement('path', {"d":"M3 14L4 14","key":"5"}),
    createElement('path', {"d":"M21.621 10C20.793 9.172 19.449 9.172 18.621 10C17.793 10.828 17.793 12.172 18.621 13L21.121 15.5C21.949 16.328 21.949 17.672 21.121 18.5C20.293 19.328 18.949 19.328 18.121 18.5","key":"6"}),
    createElement('path', {"d":"M20 8L20 9.379","key":"7"}),
    createElement('path', {"d":"M20 19.121L20 21","key":"8"})
  );
});

ListDollarDash.displayName = 'ListDollarDash';

export default ListDollarDash;
export { ListDollarDash };
