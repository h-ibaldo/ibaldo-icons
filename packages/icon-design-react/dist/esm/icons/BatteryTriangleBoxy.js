import { createElement, forwardRef } from 'react';

const BatteryTriangleBoxy = forwardRef(function BatteryTriangleBoxy(
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
    createElement('path', {"d":"M17 19L5 19C3.895 19 3 18.105 3 17L3 7C3 5.895 3.895 5 5 5L17 5C18.105 5 19 5.895 19 7L19 17C19 18.105 18.105 19 17 19Z","key":"0"}),
    createElement('path', {"d":"M19 15L21 15C21.551 15 22 14.555 22 14L22 10C22 9.445 21.551 9 21 9L19 9","key":"1"}),
    createElement('path', {"d":"M7 9L12 15L7 15Z","key":"2"})
  );
});

BatteryTriangleBoxy.displayName = 'BatteryTriangleBoxy';

export default BatteryTriangleBoxy;
export { BatteryTriangleBoxy };
