import { createElement, forwardRef } from 'react';

const Aperture = forwardRef(function Aperture(
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
    createElement('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"1"}),
    createElement('path', {"d":"M16 3L16 14.309","key":"2"}),
    createElement('path', {"d":"M21.73 11L12 16.617","key":"3"}),
    createElement('path', {"d":"M17.855 20L8 14.309","key":"4"}),
    createElement('path', {"d":"M8 21L8 9.691","key":"5"}),
    createElement('path', {"d":"M2.27 13L12 7.383","key":"6"}),
    createElement('path', {"d":"M6.145 4L16 9.691","key":"7"})
  );
});

Aperture.displayName = 'Aperture';

export default Aperture;
export { Aperture };
