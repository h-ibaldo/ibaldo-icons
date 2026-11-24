import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const ChecklistSquareEnds = forwardRef(function ChecklistSquareEnds(
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
    createElement(Line, {"x1":"10.974731440099276","y1":"4.000000003885361","x2":"21.974731440099276","y2":"4.000000003885361","key":"0"}),
    createElement(Line, {"x1":"10.974731440099276","y1":"12.000000003885361","x2":"21.974731440099276","y2":"12.000000003885361","key":"1"}),
    createElement(Line, {"x1":"10.974731440099276","y1":"20.000000003885361","x2":"21.974731440099276","y2":"20.000000003885361","key":"2"}),
    createElement(Polyline, {"points":"1.974731440099276 20.000000003885361 3.974731440099276 22.000000003885361 6.974731440099276 18.000000003885361","key":"3"}),
    createElement(Polyline, {"points":"1.974731440099276 4.000000003885361 3.974731440099276 6.000000003885361 6.974731440099276 2.000000003885361","key":"4"}),
    createElement(Rect, {"x":"1.974731440099276","y":"10.000000003885361","width":"4","height":"4","key":"5"})
  );
});

ChecklistSquareEnds.displayName = 'ChecklistSquareEnds';

export default ChecklistSquareEnds;
export { ChecklistSquareEnds };
