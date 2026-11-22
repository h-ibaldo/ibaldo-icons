import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartGantt = forwardRef(function ChartGantt(
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
    createElement(Path, {"d":"M12.965 12L7 12","key":"1"}),
    createElement(Path, {"d":"M16.965 16L11 16","key":"2"}),
    createElement(Path, {"d":"M20.965 8L11 8","key":"3"})
  );
});

ChartGantt.displayName = 'ChartGantt';

export default ChartGantt;
export { ChartGantt };
