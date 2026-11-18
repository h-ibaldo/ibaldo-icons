import { createElement, forwardRef } from 'react';

const ChevronUpDownStaggeredSquare = forwardRef(function ChevronUpDownStaggeredSquare(
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
    createElement('path', {"d":"M13 10L15 12L17 10","key":"0"}),
    createElement('path', {"d":"M11 14L9 12L7 14","key":"1"}),
    createElement('path', {"d":"M17 2L7 2C4.238 2 2 4.238 2 7L2 17C2 19.762 4.238 22 7 22L17 22C19.762 22 22 19.762 22 17L22 7C22 4.238 19.762 2 17 2Z","key":"2"})
  );
});

ChevronUpDownStaggeredSquare.displayName = 'ChevronUpDownStaggeredSquare';

export default ChevronUpDownStaggeredSquare;
export { ChevronUpDownStaggeredSquare };
