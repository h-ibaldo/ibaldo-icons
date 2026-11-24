import { createElement, forwardRef } from 'react';
import Svg, { G, Line, Polyline, Rect } from 'react-native-svg';

const CheckDoubleSquare = forwardRef(function CheckDoubleSquare(
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
    createElement(Rect, {"x":"1.974731440099276","y":"2.000000003885361","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement(Polyline, {"points":"17.974731440099276 9.000000003885361 12.974731440099276 15.000000003885361 9.974731440099276 12.000000003885361","key":"1"}),
    createElement(G, {"key":"2"},
      createElement(Line, {"x1":"12.611083979159957","y1":"10.636352542947861","x2":"13.974731440099276","y2":"9.000000003885361","key":"0"}),
      createElement(Line, {"x1":"5.974731440099276","y1":"12.000000003885361","x2":"8.974731440099276","y2":"15.000000003885361","key":"1"}))
  );
});

CheckDoubleSquare.displayName = 'CheckDoubleSquare';

export default CheckDoubleSquare;
export { CheckDoubleSquare };
