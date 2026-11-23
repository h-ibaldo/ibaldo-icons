import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BroomSparkles = forwardRef(function BroomSparkles(
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
    createElement(Path, {"d":"M9 22L2 15L7.977 11.266C9.16 10.523 10.699 10.699 11.688 11.688L12.313 12.313C13.301 13.301 13.477 14.84 12.734 16.023Z","key":"0"}),
    createElement(Path, {"d":"M11.93 17.313L6.688 12.07","key":"1"}),
    createElement(Path, {"d":"M12 12L22 2","key":"2"}),
    createElement(Path, {"d":"M5.5 3L5.5 8","key":"3"}),
    createElement(Path, {"d":"M8 5.5L3 5.5","key":"4"}),
    createElement(Path, {"d":"M20.5 13L20.5 16","key":"5"}),
    createElement(Path, {"d":"M22 14.5L19 14.5","key":"6"}),
    createElement(Path, {"d":"M16.5 19L16.5 22","key":"7"}),
    createElement(Path, {"d":"M18 20.5L15 20.5","key":"8"})
  );
});

BroomSparkles.displayName = 'BroomSparkles';

export default BroomSparkles;
export { BroomSparkles };
