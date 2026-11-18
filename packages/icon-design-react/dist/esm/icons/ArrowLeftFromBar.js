import { createElement, forwardRef } from 'react';

const ArrowLeftFromBar = forwardRef(function ArrowLeftFromBar(
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
    createElement('path', {"d":"M7 16L3 12L7 8","key":"0"}),
    createElement('path', {"d":"M21 7L21 17","key":"1"}),
    createElement('path', {"d":"M3 12L21 12","key":"2"})
  );
});

ArrowLeftFromBar.displayName = 'ArrowLeftFromBar';

export default ArrowLeftFromBar;
export { ArrowLeftFromBar };
