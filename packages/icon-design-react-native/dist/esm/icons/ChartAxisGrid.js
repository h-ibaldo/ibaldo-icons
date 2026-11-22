import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartAxisGrid = forwardRef(function ChartAxisGrid(
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
    createElement(Path, {"d":"M12 2L12 22","key":"1"}),
    createElement(Path, {"d":"M12 2L12 22","key":"2"}),
    createElement(Path, {"d":"M22 12L2 12","key":"3"})
  );
});

ChartAxisGrid.displayName = 'ChartAxisGrid';

export default ChartAxisGrid;
export { ChartAxisGrid };
