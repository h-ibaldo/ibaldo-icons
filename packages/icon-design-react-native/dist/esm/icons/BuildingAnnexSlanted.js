import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BuildingAnnexSlanted = forwardRef(function BuildingAnnexSlanted(
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
    createElement(Path, {"d":"M2 22L2 2L14 2L14 22","key":"0"}),
    createElement(Path, {"d":"M2 6L6 6","key":"1"}),
    createElement(Path, {"d":"M2 10L6 10","key":"2"}),
    createElement(Path, {"d":"M2 14L6 14","key":"3"}),
    createElement(Path, {"d":"M2 18L6 18","key":"4"}),
    createElement(Path, {"d":"M18 10L18 10","key":"5"}),
    createElement(Path, {"d":"M18 14L18 14","key":"6"}),
    createElement(Path, {"d":"M18 18L18 18","key":"7"}),
    createElement(Path, {"d":"M18 10L18 10","key":"8"}),
    createElement(Path, {"d":"M18 14L18 14","key":"9"}),
    createElement(Path, {"d":"M10 14L10 14","key":"10"}),
    createElement(Path, {"d":"M10 10L10 10","key":"11"}),
    createElement(Path, {"d":"M10 6L10 6","key":"12"}),
    createElement(Path, {"d":"M18 18L18 18","key":"13"}),
    createElement(Path, {"d":"M22 22L22 7L14 4","key":"14"}),
    createElement(Path, {"d":"M2 22L22 22","key":"15"}),
    createElement(Path, {"d":"M10 18L10 22","key":"16"})
  );
});

BuildingAnnexSlanted.displayName = 'BuildingAnnexSlanted';

export default BuildingAnnexSlanted;
export { BuildingAnnexSlanted };
