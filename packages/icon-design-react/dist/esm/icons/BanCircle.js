import { createElement, forwardRef } from 'react';

const BanCircle = forwardRef(function BanCircle(
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
    createElement('path', {"d":"M17 12C17 14.762 14.762 17 12 17C9.238 17 7 14.762 7 12C7 9.238 9.238 7 12 7C14.762 7 17 9.238 17 12Z","key":"1"}),
    createElement('path', {"d":"M15.535 8.465L8.465 15.535","key":"2"})
  );
});

BanCircle.displayName = 'BanCircle';

export default BanCircle;
export { BanCircle };
