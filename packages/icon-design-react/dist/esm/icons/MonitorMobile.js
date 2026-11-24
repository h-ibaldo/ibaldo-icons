import { createElement, forwardRef } from 'react';

const MonitorMobile = forwardRef(function MonitorMobile(
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
    createElement('path', {"d":"M14 16L2 16L2 3L22 3L22 9","key":"0"}),
    createElement('path', {"d":"M12 20L12 16","key":"1"}),
    createElement('path', {"d":"M14 20L6 20","key":"2"}),
    createElement('path', {"d":"M18 12L21 12C21.551 12 22 12.449 22 13L22 20C22 20.551 21.551 21 21 21L18 21C17.449 21 17 20.551 17 20L17 13C17 12.449 17.449 12 18 12Z","key":"3"})
  );
});

MonitorMobile.displayName = 'MonitorMobile';

export default MonitorMobile;
export { MonitorMobile };
