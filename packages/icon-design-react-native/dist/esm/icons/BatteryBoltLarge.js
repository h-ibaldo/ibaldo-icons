import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BatteryBoltLarge = forwardRef(function BatteryBoltLarge(
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
    createElement(Path, {"d":"M6 19L5 19C3.895 19 3 18.105 3 17L3 7C3 5.895 3.895 5 5 5L7 5","key":"0"}),
    createElement(Path, {"d":"M16 5L17 5C18.105 5 19 5.895 19 7L19 17C19 18.105 18.105 19 17 19L15 19","key":"1"}),
    createElement(Path, {"d":"M19 15L21 15C21.551 15 22 14.555 22 14L22 10C22 9.445 21.551 9 21 9L19 9","key":"2"}),
    createElement(Path, {"d":"M10 20L10 14L6 12L12 4L12 10L16 12Z","key":"3"})
  );
});

BatteryBoltLarge.displayName = 'BatteryBoltLarge';

export default BatteryBoltLarge;
export { BatteryBoltLarge };
