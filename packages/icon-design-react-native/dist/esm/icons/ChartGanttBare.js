import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartGanttBare = forwardRef(function ChartGanttBare(
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
    createElement(Path, {"d":"M12 12L2 12","key":"0"}),
    createElement(Path, {"d":"M19 18L6.965 18","key":"1"}),
    createElement(Path, {"d":"M22 6L10 6","key":"2"})
  );
});

ChartGanttBare.displayName = 'ChartGanttBare';

export default ChartGanttBare;
export { ChartGanttBare };
