import { createElement, forwardRef } from 'react';

const BluetoothOff = forwardRef(function BluetoothOff(
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
    createElement('path', {"d":"M3.332 4L20.668 20","key":"0"}),
    createElement('path', {"d":"M15.332 8.922C16.5 7.848 18.5 6 18.5 6L12 2L12 5.848","key":"1"}),
    createElement('path', {"d":"M18.5 18L12 22","key":"2"}),
    createElement('path', {"d":"M12 12L12 22","key":"3"}),
    createElement('path', {"d":"M5.5 18L12 12","key":"4"})
  );
});

BluetoothOff.displayName = 'BluetoothOff';

export default BluetoothOff;
export { BluetoothOff };
