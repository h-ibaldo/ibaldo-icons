import { createElement, forwardRef } from 'react';

const BluetoothDotsNarrow = forwardRef(function BluetoothDotsNarrow(
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
    createElement('path', {"d":"M8 2L13 7L8 12L3 7","key":"0"}),
    createElement('path', {"d":"M3 17L8 12L13 17L8 22","key":"1"}),
    createElement('path', {"d":"M8 2L8 22","key":"2"}),
    createElement('path', {"d":"M18 12L18 12","key":"3"}),
    createElement('path', {"d":"M14 12L14 12","key":"4"}),
    createElement('path', {"d":"M22 12L22 12","key":"5"})
  );
});

BluetoothDotsNarrow.displayName = 'BluetoothDotsNarrow';

export default BluetoothDotsNarrow;
export { BluetoothDotsNarrow };
