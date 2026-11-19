import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BuildingDoorWide = forwardRef(function BuildingDoorWide(
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
    createElement(Path, {"d":"M4 6L4 22L20 22L20 6","key":"0"}),
    createElement(Path, {"d":"M22 6L2 6","key":"1"}),
    createElement(Path, {"d":"M8 10L8 10","key":"2"}),
    createElement(Path, {"d":"M12 10L12 10","key":"3"}),
    createElement(Path, {"d":"M8 14L8 14","key":"4"}),
    createElement(Path, {"d":"M12 14L12 14","key":"5"}),
    createElement(Path, {"d":"M8 18L8 18","key":"6"}),
    createElement(Path, {"d":"M12 22L12 18","key":"7"}),
    createElement(Path, {"d":"M16 10L16 10","key":"8"}),
    createElement(Path, {"d":"M16 14L16 14","key":"9"}),
    createElement(Path, {"d":"M16 18L16 18","key":"10"}),
    createElement(Path, {"d":"M7 2L17 2","key":"11"})
  );
});

BuildingDoorWide.displayName = 'BuildingDoorWide';

export default BuildingDoorWide;
export { BuildingDoorWide };
