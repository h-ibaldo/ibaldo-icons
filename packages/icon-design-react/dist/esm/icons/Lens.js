import { createElement, forwardRef } from 'react';

const Lens = forwardRef(function Lens(
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
    createElement('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement('path', {"d":"M6 12C6 8.688 8.688 6 12 6C12.613 6 13.207 6.094 13.766 6.266C12.727 6.734 12 7.781 12 9C12 10.656 13.344 12 15 12C16.219 12 17.266 11.273 17.734 10.234C17.906 10.793 18 11.387 18 12C18 15.313 15.313 18 12 18C8.688 18 6 15.313 6 12Z","key":"1"})
  );
});

Lens.displayName = 'Lens';

export default Lens;
export { Lens };
