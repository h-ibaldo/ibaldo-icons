import { createElement, forwardRef } from 'react';
import Svg, { Line } from 'react-native-svg';

const X = forwardRef(function X(
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
    createElement(Line, {"x1":"3.999999991150617","y1":"20.000000000538421","x2":"19.999999990430297","y2":"4.000000001257831","key":"0"}),
    createElement(Line, {"x1":"19.999999990070137","y1":"20.000000000894943","x2":"3.999999991510776","y2":"4.000000000897671","key":"1"})
  );
});

X.displayName = 'X';

export default X;
export { X };
