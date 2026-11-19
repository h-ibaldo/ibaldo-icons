import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline, Rect } from 'react-native-svg';

const ChartBarSquareCheck = forwardRef(function ChartBarSquareCheck(
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
    createElement(Polyline, {"points":"16.974731440099276 4.000000004336471 18.974731440099276 6.000000004336471 21.974731440099276 3.000000004336471","key":"0"}),
    createElement(Path, {"d":"M21.974731440099276,9.000000004336471v8c0,2.761423749150708-2.238576250838378,5-5,5H6.974731440099276c-2.761423749148889,0-5-2.238576250849292-5-5V7.000000004336471c0-2.761423749150708,2.238576250851111-5,5-5h6","key":"1"}),
    createElement(Rect, {"x":"5.974731440099276","y":"10.000000003885361","width":"4","height":"6","key":"2"}),
    createElement(Rect, {"x":"9.974731440099276","y":"7.000000003885361","width":"4","height":"9","key":"3"}),
    createElement(Rect, {"x":"13.974731440099276","y":"11.000000003885361","width":"4","height":"5","key":"4"})
  );
});

ChartBarSquareCheck.displayName = 'ChartBarSquareCheck';

export default ChartBarSquareCheck;
export { ChartBarSquareCheck };
