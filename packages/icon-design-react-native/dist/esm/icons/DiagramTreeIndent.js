import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const DiagramTreeIndent = forwardRef(function DiagramTreeIndent(
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
    createElement(Rect, {"x":"2.949462885142566","y":"2.000000000480213","width":"8","height":"4","key":"0"}),
    createElement(Rect, {"x":"12.949462885142566","y":"10.000000000480213","width":"8","height":"4","key":"1"}),
    createElement(Rect, {"x":"12.949462885142566","y":"18.000000000480213","width":"8","height":"4","key":"2"}),
    createElement(Polyline, {"points":"6.949462885142566 6.000000000480213 6.949462885142566 20.000000000480213 12.949462885142566 20.000000000480213","key":"3"}),
    createElement(Line, {"x1":"6.949462885142566","y1":"12.000000000480213","x2":"12.949462885142566","y2":"12.000000000480213","key":"4"})
  );
});

DiagramTreeIndent.displayName = 'DiagramTreeIndent';

export default DiagramTreeIndent;
export { DiagramTreeIndent };
