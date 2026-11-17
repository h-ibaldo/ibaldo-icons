import { createElement, forwardRef } from 'react';

const MonitorCode = forwardRef(function MonitorCode(
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
    createElement('path', {"d":"M13 7L11 13","key":"0"}),
    createElement('path', {"d":"M16 8L18 10L16 12","key":"1"}),
    createElement('path', {"d":"M8 8L6 10L8 12","key":"2"}),
    createElement('path', {"d":"M20 17L4 17C2.895 17 2 16.105 2 15L2 5C2 3.895 2.895 3 4 3L20 3C21.105 3 22 3.895 22 5L22 15C22 16.105 21.105 17 20 17Z","key":"3"}),
    createElement('path', {"d":"M5 21L19 21","key":"4"}),
    createElement('path', {"d":"M12 17L12 21","key":"5"})
  );
});

MonitorCode.displayName = 'MonitorCode';

export default MonitorCode;
export { MonitorCode };
