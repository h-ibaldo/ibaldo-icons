import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BatteryPlugBoxy = forwardRef(function BatteryPlugBoxy(
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
    createElement(Path, {"d":"M17 19L5 19C3.895 19 3 18.105 3 17L3 7C3 5.895 3.895 5 5 5L17 5C18.105 5 19 5.895 19 7L19 17C19 18.105 18.105 19 17 19Z","key":"0"}),
    createElement(Path, {"d":"M12 10L15 10","key":"1"}),
    createElement(Path, {"d":"M12 14L15 14","key":"2"}),
    createElement(Path, {"d":"M12 8L10 8C8.344 8 7 9.344 7 11L7 13C7 14.656 8.344 16 10 16L12 16","key":"3"}),
    createElement(Path, {"d":"M12 16L12 8","key":"4"}),
    createElement(Path, {"d":"M4 12L7 12","key":"5"}),
    createElement(Path, {"d":"M19 15L21 15C21.551 15 22 14.555 22 14L22 10C22 9.445 21.551 9 21 9L19 9","key":"6"})
  );
});

BatteryPlugBoxy.displayName = 'BatteryPlugBoxy';

export default BatteryPlugBoxy;
export { BatteryPlugBoxy };
