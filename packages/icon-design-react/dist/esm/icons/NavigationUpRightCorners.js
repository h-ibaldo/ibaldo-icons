import { createElement, forwardRef } from 'react';

const NavigationUpRightCorners = forwardRef(function NavigationUpRightCorners(
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
    createElement('path', {"d":"M7.551 9.93L14.625 8.16C15.359 7.98 16.02 8.641 15.84 9.375L14.07 16.449C13.844 17.352 12.621 17.484 12.207 16.652L10.734 13.711C10.637 13.52 10.48 13.363 10.289 13.266L7.348 11.793C6.516 11.379 6.652 10.156 7.551 9.93Z","key":"0"}),
    createElement('path', {"d":"M22 8L22 5C22 3.344 20.656 2 19 2L16 2","key":"1"}),
    createElement('path', {"d":"M8 2L5 2C3.344 2 2 3.344 2 5L2 8","key":"2"}),
    createElement('path', {"d":"M2 16L2 19C2 20.656 3.344 22 5 22L8 22","key":"3"}),
    createElement('path', {"d":"M16 22L19 22C20.656 22 22 20.656 22 19L22 16","key":"4"})
  );
});

NavigationUpRightCorners.displayName = 'NavigationUpRightCorners';

export default NavigationUpRightCorners;
export { NavigationUpRightCorners };
