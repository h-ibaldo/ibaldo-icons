import { createElement, forwardRef } from 'react';

const NavigationDownLeftSquare = forwardRef(function NavigationDownLeftSquare(
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
    createElement('path', {"d":"M16.449 14.07L9.375 15.84C8.641 16.02 7.977 15.359 8.16 14.625L9.93 7.551C10.156 6.648 11.379 6.516 11.797 7.348L13.266 10.289C13.363 10.48 13.52 10.637 13.711 10.734L16.652 12.207C17.484 12.621 17.348 13.844 16.449 14.07Z","key":"0"}),
    createElement('path', {"d":"M2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"1"})
  );
});

NavigationDownLeftSquare.displayName = 'NavigationDownLeftSquare';

export default NavigationDownLeftSquare;
export { NavigationDownLeftSquare };
