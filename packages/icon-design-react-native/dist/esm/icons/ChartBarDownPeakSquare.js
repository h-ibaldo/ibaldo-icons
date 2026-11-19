import { createElement, forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';

const ChartBarDownPeakSquare = forwardRef(function ChartBarDownPeakSquare(
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
    createElement(Rect, {"x":"1.974731440099276","y":"2.000000004336471","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement(Rect, {"x":"5.974731440099276","y":"6.000000003885361","width":"4","height":"6","key":"1"}),
    createElement(Rect, {"x":"9.974731440099276","y":"6.000000003885361","width":"4","height":"9","key":"2"}),
    createElement(Rect, {"x":"13.974731440099276","y":"6.000000003885361","width":"4","height":"5","key":"3"})
  );
});

ChartBarDownPeakSquare.displayName = 'ChartBarDownPeakSquare';

export default ChartBarDownPeakSquare;
export { ChartBarDownPeakSquare };
