import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BluetoothOff = forwardRef(function BluetoothOff(
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
    createElement(Path, {"d":"M3.332 4L20.668 20","key":"0"}),
    createElement(Path, {"d":"M15.332 8.922C16.5 7.848 18.5 6 18.5 6L12 2L12 5.848","key":"1"}),
    createElement(Path, {"d":"M18.5 18L12 22","key":"2"}),
    createElement(Path, {"d":"M12 12L12 22","key":"3"}),
    createElement(Path, {"d":"M5.5 18L12 12","key":"4"})
  );
});

BluetoothOff.displayName = 'BluetoothOff';

export default BluetoothOff;
export { BluetoothOff };
