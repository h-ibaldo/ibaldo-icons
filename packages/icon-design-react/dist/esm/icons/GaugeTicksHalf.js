import { createElement, forwardRef } from 'react';

const GaugeTicksHalf = forwardRef(function GaugeTicksHalf(
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
    createElement('path', {"d":"M18 16L20.938 16C21.539 16 22.004 15.473 21.938 14.875C21.379 9.883 17.145 6 12 6C6.855 6 2.621 9.883 2.063 14.875C1.996 15.473 2.461 16 3.063 16L6 16","key":"0"}),
    createElement('path', {"d":"M13.926 16.535C14.223 15.473 13.602 14.367 12.535 14.074C11.473 13.777 10.371 14.398 10.074 15.465C9.777 16.527 10.398 17.629 11.461 17.926C12.527 18.223 13.629 17.602 13.926 16.535Z","key":"1"}),
    createElement('path', {"d":"M12 6L12 9","key":"2"}),
    createElement('path', {"d":"M7 11L5 9","key":"3"}),
    createElement('path', {"d":"M16.617 10.895L13.336 14.523","key":"4"})
  );
});

GaugeTicksHalf.displayName = 'GaugeTicksHalf';

export default GaugeTicksHalf;
export { GaugeTicksHalf };
