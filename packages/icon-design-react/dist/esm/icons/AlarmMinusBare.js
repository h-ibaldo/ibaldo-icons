import { createElement, forwardRef } from 'react';

const AlarmMinusBare = forwardRef(function AlarmMinusBare(
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
    createElement('path', {"d":"M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z","key":"0"}),
    createElement('path', {"d":"M17 2L21 5","key":"1"}),
    createElement('path', {"d":"M7 2L3 5","key":"2"}),
    createElement('path', {"d":"M9 13L15 13","key":"3"})
  );
});

AlarmMinusBare.displayName = 'AlarmMinusBare';

export default AlarmMinusBare;
export { AlarmMinusBare };
