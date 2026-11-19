import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BuildingAnnex = forwardRef(function BuildingAnnex(
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
    createElement(Path, {"d":"M14 2L2 2L2 22L14 22Z","key":"0"}),
    createElement(Path, {"d":"M14 22L22 22L22 7L14 7","key":"1"}),
    createElement(Path, {"d":"M6 7L6 7","key":"2"}),
    createElement(Path, {"d":"M10 7L10 7","key":"3"}),
    createElement(Path, {"d":"M6 12L6 12","key":"4"}),
    createElement(Path, {"d":"M10 12L10 12","key":"5"}),
    createElement(Path, {"d":"M6 17L6 17","key":"6"}),
    createElement(Path, {"d":"M10 17L10 17","key":"7"}),
    createElement(Path, {"d":"M18 12L18 12","key":"8"}),
    createElement(Path, {"d":"M18 17L18 17","key":"9"})
  );
});

BuildingAnnex.displayName = 'BuildingAnnex';

export default BuildingAnnex;
export { BuildingAnnex };
