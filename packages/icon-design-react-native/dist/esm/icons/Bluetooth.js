import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Bluetooth = forwardRef(function Bluetooth(
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
    createElement(Path, {"d":"M12 2L12 22","key":"0"}),
    createElement(Path, {"d":"M5.5 18L18.5 6","key":"1"}),
    createElement(Path, {"d":"M5.5 6L18.5 18","key":"2"}),
    createElement(Path, {"d":"M12 2L18.5 6","key":"3"}),
    createElement(Path, {"d":"M18.5 18L12 22","key":"4"})
  );
});

Bluetooth.displayName = 'Bluetooth';

export default Bluetooth;
export { Bluetooth };
