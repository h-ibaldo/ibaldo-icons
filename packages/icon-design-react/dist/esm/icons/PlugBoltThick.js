import { createElement, forwardRef } from 'react';

const PlugBoltThick = forwardRef(function PlugBoltThick(
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
    createElement('path', {"d":"M3 8L14 8C14.551 8 15 8.449 15 9L15 13C15 15.762 12.762 18 10 18L7 18C4.238 18 2 15.762 2 13L2 9C2 8.449 2.449 8 3 8Z","key":"0"}),
    createElement('path', {"d":"M4 8L4 3.5C4 2.672 4.672 2 5.5 2C6.328 2 7 2.672 7 3.5L7 8","key":"1"}),
    createElement('path', {"d":"M10 8L10 3.5C10 2.672 10.672 2 11.5 2C12.328 2 13 2.672 13 3.5L13 8","key":"2"}),
    createElement('path', {"d":"M7 18L7 22","key":"3"}),
    createElement('path', {"d":"M10 18L10 22","key":"4"}),
    createElement('path', {"d":"M22 2L18 6L22 6L18 11","key":"5"})
  );
});

PlugBoltThick.displayName = 'PlugBoltThick';

export default PlugBoltThick;
export { PlugBoltThick };
