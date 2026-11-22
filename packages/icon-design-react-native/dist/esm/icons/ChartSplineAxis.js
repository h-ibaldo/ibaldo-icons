import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartSplineAxis = forwardRef(function ChartSplineAxis(
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
    createElement(Path, {"d":"M6 18C6.938 9 10.281 6.773 13.5 12C16.719 17.227 21 14 21 6","key":"1"})
  );
});

ChartSplineAxis.displayName = 'ChartSplineAxis';

export default ChartSplineAxis;
export { ChartSplineAxis };
