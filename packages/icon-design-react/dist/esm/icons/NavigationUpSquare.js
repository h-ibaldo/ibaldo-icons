import { createElement, forwardRef } from 'react';

const NavigationUpSquare = forwardRef(function NavigationUpSquare(
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
    createElement('path', {"d":"M17.023 14.344L12.934 7.531C12.512 6.824 11.488 6.824 11.066 7.531L6.977 14.344C6.453 15.215 7.297 16.262 8.254 15.941L11.656 14.809C11.879 14.734 12.121 14.734 12.344 14.809L15.746 15.941C16.707 16.262 17.547 15.215 17.023 14.344Z","key":"0"}),
    createElement('path', {"d":"M2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"1"})
  );
});

NavigationUpSquare.displayName = 'NavigationUpSquare';

export default NavigationUpSquare;
export { NavigationUpSquare };
