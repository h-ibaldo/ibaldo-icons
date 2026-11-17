import { createElement, forwardRef } from 'react';

const ClockMantel = forwardRef(function ClockMantel(
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
    createElement('path', {"d":"M12 2C7.027 2 3 6.027 3 11L3 21C3 21.555 3.449 22 4 22L20 22C20.551 22 21 21.555 21 21L21 11C21 6.027 16.973 2 12 2Z","key":"0"}),
    createElement('path', {"d":"M17 11C17 8.238 14.762 6 12 6C9.238 6 7 8.238 7 11C7 13.762 9.238 16 12 16C14.762 16 17 13.762 17 11Z","key":"1"}),
    createElement('path', {"d":"M12 9L12 11L14 11","key":"2"})
  );
});

ClockMantel.displayName = 'ClockMantel';

export default ClockMantel;
export { ClockMantel };
