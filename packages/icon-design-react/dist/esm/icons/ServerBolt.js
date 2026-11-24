import { createElement, forwardRef } from 'react';

const ServerBolt = forwardRef(function ServerBolt(
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
    createElement('path', {"d":"M7 5L6 5","key":"0"}),
    createElement('path', {"d":"M14.902 16L21 16C21.551 16 22 16.449 22 17L22 21C22 21.551 21.551 22 21 22L3 22C2.449 22 2 21.551 2 21L2 17C2 16.449 2.449 16 3 16L6 16","key":"1"}),
    createElement('path', {"d":"M8.098 8L3 8C2.449 8 2 7.551 2 7L2 3C2 2.449 2.449 2 3 2L21 2C21.551 2 22 2.449 22 3L22 7C22 7.551 21.551 8 21 8L18 8","key":"2"}),
    createElement('path', {"d":"M7 19L6 19","key":"3"}),
    createElement('path', {"d":"M14 7L10 11.5L14 11.5L10 16","key":"4"})
  );
});

ServerBolt.displayName = 'ServerBolt';

export default ServerBolt;
export { ServerBolt };
