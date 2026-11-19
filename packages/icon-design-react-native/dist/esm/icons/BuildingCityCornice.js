import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BuildingCityCornice = forwardRef(function BuildingCityCornice(
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
    createElement(Path, {"d":"M8 5L8 7","key":"0"}),
    createElement(Path, {"d":"M18 5L7 5","key":"1"}),
    createElement(Path, {"d":"M16 2L9 2","key":"2"}),
    createElement(Path, {"d":"M10 22L17 22L17 5","key":"3"}),
    createElement(Path, {"d":"M22 10L17 10","key":"4"}),
    createElement(Path, {"d":"M17 22L21 22L21 10","key":"5"}),
    createElement(Path, {"d":"M3 13L3 22L10 22L10 13","key":"6"}),
    createElement(Path, {"d":"M11 13L2 13","key":"7"}),
    createElement(Path, {"d":"M10 10L3 10","key":"8"})
  );
});

BuildingCityCornice.displayName = 'BuildingCityCornice';

export default BuildingCityCornice;
export { BuildingCityCornice };
