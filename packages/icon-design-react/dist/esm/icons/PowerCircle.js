import { createElement, forwardRef } from 'react';

const PowerCircle = forwardRef(function PowerCircle(
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
    createElement('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement('path', {"d":"M12 5L12 12","key":"1"}),
    createElement('path', {"d":"M15 8C16.215 8.91 17 10.363 17 12C17 14.762 14.762 17 12 17C9.238 17 7 14.762 7 12C7 10.363 7.785 8.91 9 8","key":"2"})
  );
});

PowerCircle.displayName = 'PowerCircle';

export default PowerCircle;
export { PowerCircle };
