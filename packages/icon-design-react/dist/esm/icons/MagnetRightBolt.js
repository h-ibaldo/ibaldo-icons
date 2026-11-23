import { createElement, forwardRef } from 'react';

const MagnetRightBolt = forwardRef(function MagnetRightBolt(
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
    createElement('path', {"d":"M14 22L14 17","key":"0"}),
    createElement('path', {"d":"M14 7L14 2","key":"1"}),
    createElement('path', {"d":"M18 22L12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2L18 2L18 7L12 7C9.238 7 7 9.238 7 12C7 14.762 9.238 17 12 17L18 17Z","key":"2"}),
    createElement('path', {"d":"M22 9L20 11L22 13L20 15","key":"3"})
  );
});

MagnetRightBolt.displayName = 'MagnetRightBolt';

export default MagnetRightBolt;
export { MagnetRightBolt };
