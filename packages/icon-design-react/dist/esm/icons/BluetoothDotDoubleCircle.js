import { createElement, forwardRef } from 'react';

const BluetoothDotDoubleCircle = forwardRef(function BluetoothDotDoubleCircle(
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
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M18 12L18 12","key":"1"}),
    createElement('path', {"d":"M6 12L6 12","key":"2"}),
    createElement('path', {"d":"M12 6L12 18","key":"3"}),
    createElement('path', {"d":"M8 9L12 12L16 9L12 6","key":"4"}),
    createElement('path', {"d":"M12 18L16 15L12 12L8 15","key":"5"})
  );
});

BluetoothDotDoubleCircle.displayName = 'BluetoothDotDoubleCircle';

export default BluetoothDotDoubleCircle;
export { BluetoothDotDoubleCircle };
