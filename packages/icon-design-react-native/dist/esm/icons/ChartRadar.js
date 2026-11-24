import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartRadar = forwardRef(function ChartRadar(
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
    createElement(Path, {"d":"M22 9.641L12 13","key":"0"}),
    createElement(Path, {"d":"M18.18 22L12 13","key":"1"}),
    createElement(Path, {"d":"M5.82 22L12 13","key":"2"}),
    createElement(Path, {"d":"M2 9.641L12 13","key":"3"}),
    createElement(Path, {"d":"M12 2L12 13","key":"4"}),
    createElement(Path, {"d":"M7 20L4 10L12 4L21 10L16 19Z","key":"5"})
  );
});

ChartRadar.displayName = 'ChartRadar';

export default ChartRadar;
export { ChartRadar };
