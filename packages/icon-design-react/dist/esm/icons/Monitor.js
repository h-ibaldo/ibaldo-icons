import { createElement, forwardRef } from 'react';

const Monitor = forwardRef(function Monitor(
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
    createElement('path', {"d":"M2 5L22 5L22 16L2 16Z","key":"0"}),
    createElement('path', {"d":"M12 20L12 16","key":"1"}),
    createElement('path', {"d":"M18 20L6 20","key":"2"})
  );
});

Monitor.displayName = 'Monitor';

export default Monitor;
export { Monitor };
