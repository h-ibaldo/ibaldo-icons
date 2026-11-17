import { createElement, forwardRef } from 'react';

const NavigationUpCircleCheck = forwardRef(function NavigationUpCircleCheck(
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
    createElement('path', {"d":"M7.391 13.68L11.145 7.43C11.531 6.781 12.469 6.781 12.859 7.43L16.609 13.68C17.086 14.48 16.316 15.438 15.438 15.145L12.316 14.105C12.109 14.035 11.891 14.035 11.684 14.105L8.566 15.145C7.684 15.438 6.914 14.48 7.391 13.68Z","key":"0"}),
    createElement('path', {"d":"M22 2L18.5 5.5L17 4","key":"1"}),
    createElement('path', {"d":"M13 2.051C12.672 2.02 12.336 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 10.953 21.836 9.945 21.535 9","key":"2"})
  );
});

NavigationUpCircleCheck.displayName = 'NavigationUpCircleCheck';

export default NavigationUpCircleCheck;
export { NavigationUpCircleCheck };
