import { createElement, forwardRef } from 'react';

const ChevronDoubleDown = forwardRef(function ChevronDoubleDown(
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
    createElement('path', {"d":"M20 11L12 19L4 11","key":"0"}),
    createElement('path', {"d":"M20 5L12 13L4 5","key":"1"})
  );
});

ChevronDoubleDown.displayName = 'ChevronDoubleDown';

export default ChevronDoubleDown;
export { ChevronDoubleDown };
