import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TrayStackPlusFlat = forwardRef(function TrayStackPlusFlat(
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
    createElement(Path, {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 10C2 8.895 2.895 8 4 8L20 8C21.105 8 22 8.895 22 10L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement(Path, {"d":"M4 5L20 5","key":"1"}),
    createElement(Path, {"d":"M6 2L18 2","key":"2"}),
    createElement(Path, {"d":"M12 12L12 18","key":"3"}),
    createElement(Path, {"d":"M15 15L9 15","key":"4"})
  );
});

TrayStackPlusFlat.displayName = 'TrayStackPlusFlat';

export default TrayStackPlusFlat;
export { TrayStackPlusFlat };
