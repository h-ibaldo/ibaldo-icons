import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChalkboardChart = forwardRef(function ChalkboardChart(
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
    createElement(Path, {"d":"M3 19L3 5L21 5L21 19","key":"0"}),
    createElement(Path, {"d":"M22 19L2 19","key":"1"}),
    createElement(Path, {"d":"M14 16L17 16","key":"2"}),
    createElement(Path, {"d":"M7 14L11 10L14 12L17 9","key":"3"})
  );
});

ChalkboardChart.displayName = 'ChalkboardChart';

export default ChalkboardChart;
export { ChalkboardChart };
