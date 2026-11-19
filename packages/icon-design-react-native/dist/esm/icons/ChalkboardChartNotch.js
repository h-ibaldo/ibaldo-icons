import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChalkboardChartNotch = forwardRef(function ChalkboardChartNotch(
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
    createElement(Path, {"d":"M2 5L2 19L12 19L12 18C12 17.445 12.445 17 13 17L17 17C17.555 17 18 17.445 18 18L18 19L22 19L22 5Z","key":"0"}),
    createElement(Path, {"d":"M7 14L11 10L14 12L17 9","key":"1"})
  );
});

ChalkboardChartNotch.displayName = 'ChalkboardChartNotch';

export default ChalkboardChartNotch;
export { ChalkboardChartNotch };
