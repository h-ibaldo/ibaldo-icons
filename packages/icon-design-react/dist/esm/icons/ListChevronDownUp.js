import { createElement, forwardRef } from 'react';

const ListChevronDownUp = forwardRef(function ListChevronDownUp(
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
    createElement('path', {"d":"M13 4L22 4","key":"0"}),
    createElement('path', {"d":"M13 12L22 12","key":"1"}),
    createElement('path', {"d":"M13 20L22 20","key":"2"}),
    createElement('path', {"d":"M2 4L5.684 7.363L9.363 4","key":"3"}),
    createElement('path', {"d":"M9.363 20.363L5.684 17L2 20.363","key":"4"})
  );
});

ListChevronDownUp.displayName = 'ListChevronDownUp';

export default ListChevronDownUp;
export { ListChevronDownUp };
