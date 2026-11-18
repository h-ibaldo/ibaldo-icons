import { createElement, forwardRef } from 'react';

const NavigationRightCircle = forwardRef(function NavigationRightCircle(
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
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M10.32 7.391L16.57 11.145C17.219 11.531 17.219 12.469 16.57 12.859L10.32 16.609C9.52 17.086 8.563 16.316 8.855 15.438L9.895 12.316C9.965 12.113 9.965 11.887 9.895 11.684L8.855 8.566C8.563 7.684 9.52 6.914 10.32 7.391Z","key":"1"})
  );
});

NavigationRightCircle.displayName = 'NavigationRightCircle';

export default NavigationRightCircle;
export { NavigationRightCircle };
