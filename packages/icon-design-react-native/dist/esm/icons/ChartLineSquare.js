import { createElement, forwardRef } from 'react';
import Svg, { Polyline, Rect } from 'react-native-svg';

const ChartLineSquare = forwardRef(function ChartLineSquare(
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
    createElement(Rect, {"x":"2","y":"2","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement(Polyline, {"points":"6 15 9 11 13 15 18 9","key":"1"})
  );
});

ChartLineSquare.displayName = 'ChartLineSquare';

export default ChartLineSquare;
export { ChartLineSquare };
