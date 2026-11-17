import { createElement, forwardRef } from 'react';

const ArrowCornerUpLeft = forwardRef(function ArrowCornerUpLeft(
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
    createElement('path', {"d":"M7 12L3 8L7 4","key":"0"}),
    createElement('path', {"d":"M3 8L13 8C17.418 8 21 11.582 21 16L21 20","key":"1"})
  );
});

ArrowCornerUpLeft.displayName = 'ArrowCornerUpLeft';

export default ArrowCornerUpLeft;
export { ArrowCornerUpLeft };
