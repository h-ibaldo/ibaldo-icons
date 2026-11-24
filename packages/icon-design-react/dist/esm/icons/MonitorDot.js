import { createElement, forwardRef } from 'react';

const MonitorDot = forwardRef(function MonitorDot(
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
    createElement('path', {"d":"M22 11L22 18L2 18L2 4L14 4","key":"0"}),
    createElement('path', {"d":"M12 21L12 18","key":"1"}),
    createElement('path', {"d":"M18 21L6 21","key":"2"}),
    createElement('path', {"d":"M17 5.5C17 4.121 18.121 3 19.5 3C20.879 3 22 4.121 22 5.5C22 6.879 20.879 8 19.5 8C18.121 8 17 6.879 17 5.5Z","key":"3"})
  );
});

MonitorDot.displayName = 'MonitorDot';

export default MonitorDot;
export { MonitorDot };
