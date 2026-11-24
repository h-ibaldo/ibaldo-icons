import { createElement, forwardRef } from 'react';

const NavigationUp = forwardRef(function NavigationUp(
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
    createElement('path', {"d":"M12.996 3.633L20.477 19.418C20.934 20.387 19.883 21.375 18.941 20.859L13.602 17.906C12.605 17.359 11.395 17.359 10.398 17.906L5.059 20.859C4.117 21.375 3.066 20.387 3.523 19.418L11.004 3.633C11.398 2.789 12.602 2.789 12.996 3.633Z","key":"0"})
  );
});

NavigationUp.displayName = 'NavigationUp';

export default NavigationUp;
export { NavigationUp };
