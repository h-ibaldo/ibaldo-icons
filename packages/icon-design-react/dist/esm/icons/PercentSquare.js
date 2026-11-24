import { createElement, forwardRef } from 'react';

const PercentSquare = forwardRef(function PercentSquare(
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
    createElement('path', {"d":"M8 16L16 8","key":"0"}),
    createElement('path', {"d":"M8 9C8 8.449 8.449 8 9 8C9.551 8 10 8.449 10 9C10 9.551 9.551 10 9 10C8.449 10 8 9.551 8 9Z","key":"1"}),
    createElement('path', {"d":"M14 15C14 14.449 14.449 14 15 14C15.551 14 16 14.449 16 15C16 15.551 15.551 16 15 16C14.449 16 14 15.551 14 15Z","key":"2"}),
    createElement('path', {"d":"M7 3L17 3C19.211 3 21 4.789 21 7L21 17C21 19.211 19.211 21 17 21L7 21C4.789 21 3 19.211 3 17L3 7C3 4.789 4.789 3 7 3Z","key":"3"})
  );
});

PercentSquare.displayName = 'PercentSquare';

export default PercentSquare;
export { PercentSquare };
