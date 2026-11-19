import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BatteryMinusPlusBoxy = forwardRef(function BatteryMinusPlusBoxy(
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
    createElement(Path, {"d":"M6 12L9 12","key":"0"}),
    createElement(Path, {"d":"M12 12L16 12","key":"1"}),
    createElement(Path, {"d":"M14 10L14 14","key":"2"}),
    createElement(Path, {"d":"M17 19L5 19C3.895 19 3 18.105 3 17L3 7C3 5.895 3.895 5 5 5L17 5C18.105 5 19 5.895 19 7L19 17C19 18.105 18.105 19 17 19Z","key":"3"}),
    createElement(Path, {"d":"M19 15L22 15L22 9L19 9","key":"4"})
  );
});

BatteryMinusPlusBoxy.displayName = 'BatteryMinusPlusBoxy';

export default BatteryMinusPlusBoxy;
export { BatteryMinusPlusBoxy };
