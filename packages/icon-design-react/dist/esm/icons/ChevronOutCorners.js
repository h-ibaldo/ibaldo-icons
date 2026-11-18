import { createElement, forwardRef } from 'react';

const ChevronOutCorners = forwardRef(function ChevronOutCorners(
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
    createElement('path', {"d":"M22 6L22 5C22 3.344 20.656 2 19 2L18 2","key":"0"}),
    createElement('path', {"d":"M6 2L5 2C3.344 2 2 3.344 2 5L2 6","key":"1"}),
    createElement('path', {"d":"M2 18L2 19C2 20.656 3.344 22 5 22L6 22","key":"2"}),
    createElement('path', {"d":"M18 22L19 22C20.656 22 22 20.656 22 19L22 18","key":"3"}),
    createElement('path', {"d":"M10 4L12 2L14 4","key":"4"}),
    createElement('path', {"d":"M14 20L12 22L10 20","key":"5"}),
    createElement('path', {"d":"M4 14L2 12L4 10","key":"6"}),
    createElement('path', {"d":"M20 10L22 12L20 14","key":"7"})
  );
});

ChevronOutCorners.displayName = 'ChevronOutCorners';

export default ChevronOutCorners;
export { ChevronOutCorners };
