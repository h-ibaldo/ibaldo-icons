import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BluetoothDotDoubleCircle = forwardRef(function BluetoothDotDoubleCircle(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement(Path, {"d":"M18 12L18 12","key":"1"}),
    createElement(Path, {"d":"M6 12L6 12","key":"2"}),
    createElement(Path, {"d":"M12 6L12 18","key":"3"}),
    createElement(Path, {"d":"M8 9L12 12L16 9L12 6","key":"4"}),
    createElement(Path, {"d":"M12 18L16 15L12 12L8 15","key":"5"})
  );
});

BluetoothDotDoubleCircle.displayName = 'BluetoothDotDoubleCircle';

export default BluetoothDotDoubleCircle;
export { BluetoothDotDoubleCircle };
