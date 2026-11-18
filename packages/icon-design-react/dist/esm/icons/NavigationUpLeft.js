import { createElement, forwardRef } from 'react';

const NavigationUpLeft = forwardRef(function NavigationUpLeft(
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
    createElement('path', {"d":"M5.32 4.059L20.336 9.313C21.242 9.629 21.215 10.922 20.293 11.199L14.832 12.836C13.875 13.125 13.125 13.875 12.836 14.832L11.199 20.293C10.922 21.215 9.629 21.242 9.313 20.336L4.059 5.32C3.781 4.535 4.535 3.785 5.32 4.059Z","key":"0"})
  );
});

NavigationUpLeft.displayName = 'NavigationUpLeft';

export default NavigationUpLeft;
export { NavigationUpLeft };
