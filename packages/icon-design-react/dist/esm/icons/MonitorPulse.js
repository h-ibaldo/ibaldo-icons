import { createElement, forwardRef } from 'react';

const MonitorPulse = forwardRef(function MonitorPulse(
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
    createElement('path', {"d":"M20 18L4 18C2.895 18 2 17.105 2 16L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 16C22 17.105 21.105 18 20 18Z","key":"0"}),
    createElement('path', {"d":"M6 10L8 10L10 6L14 14L16 10L18 10","key":"1"}),
    createElement('path', {"d":"M2 22L10 22","key":"2"}),
    createElement('path', {"d":"M14 22L14 22","key":"3"}),
    createElement('path', {"d":"M18 22L18 22","key":"4"}),
    createElement('path', {"d":"M22 22L22 22","key":"5"})
  );
});

MonitorPulse.displayName = 'MonitorPulse';

export default MonitorPulse;
export { MonitorPulse };
