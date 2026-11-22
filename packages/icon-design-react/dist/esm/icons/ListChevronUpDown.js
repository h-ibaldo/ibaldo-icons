import { createElement, forwardRef } from 'react';

const ListChevronUpDown = forwardRef(function ListChevronUpDown(
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
    createElement('path', {"d":"M9.363 7.363L5.684 4L2 7.363","key":"3"}),
    createElement('path', {"d":"M2 17L5.684 20.363L9.363 17","key":"4"})
  );
});

ListChevronUpDown.displayName = 'ListChevronUpDown';

export default ListChevronUpDown;
export { ListChevronUpDown };
