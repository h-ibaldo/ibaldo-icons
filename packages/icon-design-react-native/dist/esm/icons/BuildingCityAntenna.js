import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BuildingCityAntenna = forwardRef(function BuildingCityAntenna(
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
    createElement(Path, {"d":"M8 11L3 11L3 22L8 22","key":"0"}),
    createElement(Path, {"d":"M13 2L13 5","key":"1"}),
    createElement(Path, {"d":"M15 22L22 22L22 13L15 10Z","key":"2"}),
    createElement(Path, {"d":"M15 22L8 22L8 5L18 5L18 11.285","key":"3"})
  );
});

BuildingCityAntenna.displayName = 'BuildingCityAntenna';

export default BuildingCityAntenna;
export { BuildingCityAntenna };
