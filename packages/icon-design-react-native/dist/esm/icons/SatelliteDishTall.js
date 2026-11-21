import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SatelliteDishTall = forwardRef(function SatelliteDishTall(
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
    createElement(Path, {"d":"M6 6.961C6 5.156 6.477 3.465 7.309 2L21 15.688C19.535 16.523 17.844 17 16.035 17C10.492 17 6 12.508 6 6.961Z","key":"0"}),
    createElement(Path, {"d":"M11 5L20 3L18 12","key":"1"}),
    createElement(Path, {"d":"M15 8L20 3","key":"2"}),
    createElement(Path, {"d":"M19 3C19 2.449 19.449 2 20 2C20.551 2 21 2.449 21 3C21 3.551 20.551 4 20 4C19.449 4 19 3.551 19 3Z","key":"3"}),
    createElement(Path, {"d":"M16 22L3 22","key":"4"}),
    createElement(Path, {"d":"M8 22L8 13","key":"5"}),
    createElement(Path, {"d":"M11 22L11 16","key":"6"})
  );
});

SatelliteDishTall.displayName = 'SatelliteDishTall';

export default SatelliteDishTall;
export { SatelliteDishTall };
