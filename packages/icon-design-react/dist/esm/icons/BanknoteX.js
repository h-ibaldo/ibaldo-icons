import { createElement, forwardRef } from 'react';

const BanknoteX = forwardRef(function BanknoteX(
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
    createElement('path', {"d":"M15 18L2 18L2 6L22 6L22 13","key":"0"}),
    createElement('path', {"d":"M2 14L3 14C4.656 14 6 15.344 6 17L6 18","key":"1"}),
    createElement('path', {"d":"M6 6L6 7C6 8.656 4.656 10 3 10L2 10","key":"2"}),
    createElement('path', {"d":"M18 6L18 7C18 8.656 19.344 10 21 10L22 10","key":"3"}),
    createElement('path', {"d":"M10 12C10 10.344 10.895 9 12 9C13.105 9 14 10.344 14 12C14 13.656 13.105 15 12 15C10.895 15 10 13.656 10 12Z","key":"4"}),
    createElement('path', {"d":"M18 16L22 20","key":"5"}),
    createElement('path', {"d":"M22 16L18 20","key":"6"})
  );
});

BanknoteX.displayName = 'BanknoteX';

export default BanknoteX;
export { BanknoteX };
