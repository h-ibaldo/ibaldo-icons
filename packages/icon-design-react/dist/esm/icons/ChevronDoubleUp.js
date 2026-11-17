import { createElement, forwardRef } from 'react';

const ChevronDoubleUp = forwardRef(function ChevronDoubleUp(
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
    createElement('path', {"d":"M4 13L12 5L20 13","key":"0"}),
    createElement('path', {"d":"M4 19L12 11L20 19","key":"1"})
  );
});

ChevronDoubleUp.displayName = 'ChevronDoubleUp';

export default ChevronDoubleUp;
export { ChevronDoubleUp };
