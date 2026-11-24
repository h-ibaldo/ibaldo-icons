import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartPieSlice = forwardRef(function ChartPieSlice(
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
    createElement(Path, {"d":"M12 12L12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement(Path, {"d":"M21.168 16C19.625 19.531 16.102 22 12 22C6.477 22 2 17.523 2 12C2 7.898 4.469 4.375 8 2.832","key":"1"})
  );
});

ChartPieSlice.displayName = 'ChartPieSlice';

export default ChartPieSlice;
export { ChartPieSlice };
