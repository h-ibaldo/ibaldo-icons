import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BluetoothNarrow = forwardRef(function BluetoothNarrow(
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
    createElement(Path, {"d":"M12 2L17 7L12 12L7 7","key":"0"}),
    createElement(Path, {"d":"M7 17L12 12L17 17L12 22","key":"1"}),
    createElement(Path, {"d":"M12 2L12 22","key":"2"})
  );
});

BluetoothNarrow.displayName = 'BluetoothNarrow';

export default BluetoothNarrow;
export { BluetoothNarrow };
