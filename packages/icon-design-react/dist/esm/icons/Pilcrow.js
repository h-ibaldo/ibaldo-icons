import { createElement, forwardRef } from 'react';

const Pilcrow = forwardRef(function Pilcrow(
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
    createElement('path', {"d":"M13 22L13 2L11.5 2C8.461 2 6 4.461 6 7.5C6 10.539 8.461 13 11.5 13L13 13","key":"0"}),
    createElement('path', {"d":"M17 2L17 22.102","key":"1"})
  );
});

Pilcrow.displayName = 'Pilcrow';

export default Pilcrow;
export { Pilcrow };
