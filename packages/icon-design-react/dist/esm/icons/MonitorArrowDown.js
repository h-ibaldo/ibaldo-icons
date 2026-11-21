import { createElement, forwardRef } from 'react';

const MonitorArrowDown = forwardRef(function MonitorArrowDown(
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
    createElement('path', {"d":"M2 4L22 4L22 18L2 18Z","key":"0"}),
    createElement('path', {"d":"M12 21L12 18","key":"1"}),
    createElement('path', {"d":"M18 21L6 21","key":"2"}),
    createElement('path', {"d":"M12 8L12 14","key":"3"}),
    createElement('path', {"d":"M9 11L12 14L15 11","key":"4"})
  );
});

MonitorArrowDown.displayName = 'MonitorArrowDown';

export default MonitorArrowDown;
export { MonitorArrowDown };
