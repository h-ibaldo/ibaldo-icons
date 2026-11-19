import { createElement, forwardRef } from 'react';
import Svg, { Line, Polygon, Polyline, Rect } from 'react-native-svg';

const DiagramDecision = forwardRef(function DiagramDecision(
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
    createElement(Polygon, {"points":"11.949462885142566 9.000000000480213 6.949462885144385 13.000000000480213 11.949462885142566 17.000000000480213 16.949462885140747 13.000000000480213 11.949462885142566 9.000000000480213","key":"0"}),
    createElement(Rect, {"x":"1.949462885142566","y":"18.000000000480213","width":"6","height":"4","key":"1"}),
    createElement(Rect, {"x":"15.949462885142566","y":"18.000000000480213","width":"6","height":"4","key":"2"}),
    createElement(Polyline, {"points":"6.949462885142566 13.000000000480213 4.949462885142566 13.000000000480213 4.949462885142566 18.000000000480213","key":"3"}),
    createElement(Polyline, {"points":"16.949462885142566 13.000000000571163 18.949462885029789 13.000000000389264 18.949462885255343 18.000000000389264","key":"4"}),
    createElement(Line, {"x1":"11.949462885142566","y1":"6.000000000480213","x2":"11.949462885142566","y2":"9.000000000480213","key":"5"}),
    createElement(Rect, {"x":"6.949462885142566","y":"2.000000000480213","width":"10","height":"4","key":"6"})
  );
});

DiagramDecision.displayName = 'DiagramDecision';

export default DiagramDecision;
export { DiagramDecision };
