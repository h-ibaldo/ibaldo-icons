import { createElement, forwardRef } from 'react';

const SparklePlusDouble = forwardRef(function SparklePlusDouble(
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
    createElement('path', {"d":"M4 12C8.695 12 12.5 15.582 12.5 20","key":"0"}),
    createElement('path', {"d":"M21 12C16.305 12 12.5 15.582 12.5 20","key":"1"}),
    createElement('path', {"d":"M21 12C16.305 12 12.5 8.418 12.5 4","key":"2"}),
    createElement('path', {"d":"M4 12C8.695 12 12.5 8.418 12.5 4","key":"3"}),
    createElement('path', {"d":"M5.5 3L5.5 8","key":"4"}),
    createElement('path', {"d":"M8 5.5L3 5.5","key":"5"}),
    createElement('path', {"d":"M19.5 17L19.5 20","key":"6"}),
    createElement('path', {"d":"M21 18.5L18 18.5","key":"7"})
  );
});

SparklePlusDouble.displayName = 'SparklePlusDouble';

export default SparklePlusDouble;
export { SparklePlusDouble };
