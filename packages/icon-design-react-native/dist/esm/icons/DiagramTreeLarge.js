import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const DiagramTreeLarge = forwardRef(function DiagramTreeLarge(
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
    createElement(Rect, {"x":"2.016630450973025","y":"16.000000000480213","width":"4","height":"6","key":"0"}),
    createElement(Rect, {"x":"10.016630450973025","y":"16.000000000480213","width":"4","height":"6","key":"1"}),
    createElement(Rect, {"x":"10.016630450973025","y":"2.000000000480213","width":"4","height":"6","key":"2"}),
    createElement(Rect, {"x":"18.016630450973025","y":"16.000000000480213","width":"4","height":"6","key":"3"}),
    createElement(Polyline, {"points":"4.016630450971206 16.000000000480213 4.016630450971206 12.000000000480213 20.016630450971206 12.000000000480213 20.016630450971206 16.000000000480213","key":"4"}),
    createElement(Line, {"x1":"12.016630450971206","y1":"8.000000000480213","x2":"12.016630450971206","y2":"16.000000000480213","key":"5"})
  );
});

DiagramTreeLarge.displayName = 'DiagramTreeLarge';

export default DiagramTreeLarge;
export { DiagramTreeLarge };
