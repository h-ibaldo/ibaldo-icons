import { createElement, forwardRef } from 'react';

const CircleOff = forwardRef(function CircleOff(
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
    createElement('path', {"d":"M3 3L21 21","key":"0"}),
    createElement('path', {"d":"M21.109 16.109C21.676 14.855 22 13.465 22 12C22 6.477 17.523 2 12 2C10.535 2 9.145 2.324 7.891 2.891","key":"1"}),
    createElement('path', {"d":"M2.891 7.891C2.324 9.145 2 10.535 2 12C2 17.523 6.477 22 12 22C13.465 22 14.855 21.676 16.109 21.109","key":"2"})
  );
});

CircleOff.displayName = 'CircleOff';

export default CircleOff;
export { CircleOff };
