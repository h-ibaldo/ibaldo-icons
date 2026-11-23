import { createElement, forwardRef } from 'react';

const BanknoteArrowRight = forwardRef(function BanknoteArrowRight(
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
    createElement('path', {"d":"M12 17L2 17L2 5L22 5L22 12","key":"0"}),
    createElement('path', {"d":"M2 13L3 13C4.656 13 6 14.344 6 16L6 17","key":"1"}),
    createElement('path', {"d":"M6 5L6 6C6 7.656 4.656 9 3 9L2 9","key":"2"}),
    createElement('path', {"d":"M18 5L18 6C18 7.656 19.344 9 21 9L22 9","key":"3"}),
    createElement('path', {"d":"M10 11C10 9.344 10.895 8 12 8C13.105 8 14 9.344 14 11C14 12.656 13.105 14 12 14C10.895 14 10 12.656 10 11Z","key":"4"}),
    createElement('path', {"d":"M15 17L22 17","key":"5"}),
    createElement('path', {"d":"M19 14L22 17L19 20","key":"6"})
  );
});

BanknoteArrowRight.displayName = 'BanknoteArrowRight';

export default BanknoteArrowRight;
export { BanknoteArrowRight };
