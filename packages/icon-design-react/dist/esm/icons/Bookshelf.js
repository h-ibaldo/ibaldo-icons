import { createElement, forwardRef } from 'react';

const Bookshelf = forwardRef(function Bookshelf(
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
    createElement('path', {"d":"M2 17L22 17","key":"0"}),
    createElement('path', {"d":"M5 20L5 17","key":"1"}),
    createElement('path', {"d":"M19 20L19 17","key":"2"}),
    createElement('path', {"d":"M4 17L4 7L8 7L8 17","key":"3"}),
    createElement('path', {"d":"M8 17L8 4L12 4L12 17","key":"4"}),
    createElement('path', {"d":"M16 17L16 5L20 5L20 17","key":"5"})
  );
});

Bookshelf.displayName = 'Bookshelf';

export default Bookshelf;
export { Bookshelf };
