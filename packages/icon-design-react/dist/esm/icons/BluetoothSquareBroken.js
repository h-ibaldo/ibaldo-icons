import { createElement, forwardRef } from 'react';

const BluetoothSquareBroken = forwardRef(function BluetoothSquareBroken(
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
    createElement('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement('path', {"d":"M12 12L12 19","key":"1"}),
    createElement('path', {"d":"M7 8.5L12 12","key":"2"}),
    createElement('path', {"d":"M12 19L17 15.5L12 12L7 15.5","key":"3"}),
    createElement('path', {"d":"M15.414 9.609L17 8.5L12 5L12 7.332","key":"4"})
  );
});

BluetoothSquareBroken.displayName = 'BluetoothSquareBroken';

export default BluetoothSquareBroken;
export { BluetoothSquareBroken };
