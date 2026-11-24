import { createElement, forwardRef } from 'react';

const ChevronUpRight = forwardRef(function ChevronUpRight(
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
    createElement('path', {"d":"M6 6L18 6L18 18","key":"0"})
  );
});

ChevronUpRight.displayName = 'ChevronUpRight';

export default ChevronUpRight;
export { ChevronUpRight };
