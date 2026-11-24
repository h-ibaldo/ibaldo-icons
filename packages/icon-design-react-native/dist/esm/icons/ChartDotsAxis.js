import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartDotsAxis = forwardRef(function ChartDotsAxis(
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
    createElement(Path, {"d":"M2 2L2 22L22.023 22","key":"0"}),
    createElement(Path, {"d":"M20 3L13 6","key":"1"}),
    createElement(Path, {"d":"M16 11L12 8","key":"2"}),
    createElement(Path, {"d":"M15 13L10 15","key":"3"}),
    createElement(Path, {"d":"M9 6C9 4.895 9.895 4 11 4C12.105 4 13 4.895 13 6C13 7.105 12.105 8 11 8C9.895 8 9 7.105 9 6Z","key":"4"}),
    createElement(Path, {"d":"M15 13C15 11.895 15.895 11 17 11C18.105 11 19 11.895 19 13C19 14.105 18.105 15 17 15C15.895 15 15 14.105 15 13Z","key":"5"}),
    createElement(Path, {"d":"M6 16C6 14.895 6.895 14 8 14C9.105 14 10 14.895 10 16C10 17.105 9.105 18 8 18C6.895 18 6 17.105 6 16Z","key":"6"})
  );
});

ChartDotsAxis.displayName = 'ChartDotsAxis';

export default ChartDotsAxis;
export { ChartDotsAxis };
