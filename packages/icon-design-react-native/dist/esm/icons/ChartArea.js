import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartArea = forwardRef(function ChartArea(
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
    createElement(Path, {"d":"M22 18L6 18L6 12L10 8L14 11L22 5Z","key":"1"})
  );
});

ChartArea.displayName = 'ChartArea';

export default ChartArea;
export { ChartArea };
