import { createElement, forwardRef } from 'react';

const ArrowRepeatTall = forwardRef(function ArrowRepeatTall(
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
    createElement('path', {"d":"M18 2L21 5L18 8","key":"0"}),
    createElement('path', {"d":"M6 22L3 19L6 16","key":"1"}),
    createElement('path', {"d":"M21 5L7 5C4.789 5 3 6.789 3 9L3 13","key":"2"}),
    createElement('path', {"d":"M3 19L17 19C19.211 19 21 17.211 21 15L21 11","key":"3"})
  );
});

ArrowRepeatTall.displayName = 'ArrowRepeatTall';

export default ArrowRepeatTall;
export { ArrowRepeatTall };
