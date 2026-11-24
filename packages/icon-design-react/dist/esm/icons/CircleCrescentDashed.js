import { createElement, forwardRef } from 'react';

const CircleCrescentDashed = forwardRef(function CircleCrescentDashed(
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
    createElement('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"0"}),
    createElement('path', {"d":"M9.203 3.469C8.813 3.234 8.406 3.02 7.988 2.836","key":"1"}),
    createElement('path', {"d":"M12.531 17.199C13.207 16.09 13.672 14.84 13.875 13.5","key":"2"}),
    createElement('path', {"d":"M13.672 9.5C13.359 8.297 12.836 7.18 12.133 6.195","key":"3"}),
    createElement('path', {"d":"M7.992 21.164C8.637 20.883 9.242 20.535 9.805 20.133","key":"4"})
  );
});

CircleCrescentDashed.displayName = 'CircleCrescentDashed';

export default CircleCrescentDashed;
export { CircleCrescentDashed };
