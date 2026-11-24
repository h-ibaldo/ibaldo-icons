import { createElement, forwardRef } from 'react';

const BluetoothOffNarrow = forwardRef(function BluetoothOffNarrow(
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
    createElement('path', {"d":"M17 17L12 22","key":"0"}),
    createElement('path', {"d":"M7 17L12 12","key":"1"}),
    createElement('path', {"d":"M14.863 9.137L17 7L12 2L12 6.16","key":"2"}),
    createElement('path', {"d":"M12 22L12 12","key":"3"}),
    createElement('path', {"d":"M4 4L20 20","key":"4"})
  );
});

BluetoothOffNarrow.displayName = 'BluetoothOffNarrow';

export default BluetoothOffNarrow;
export { BluetoothOffNarrow };
