import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const TouchSwipeRightGap = forwardRef(function TouchSwipeRightGap(
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
    createElement(Polyline, {"points":"19.025268535095165 8.998779304496566 22.025268534956922 11.998779304631171 19.025268534836869 14.998779304496566","key":"0"}),
    createElement(Line, {"x1":"14.025268534956922","y1":"11.998779304274649","x2":"22.025268534956922","y2":"11.998779304631171","key":"1"}),
    createElement(Circle, {"cx":"6.025268534961469","cy":"11.998779303913579","r":"3.999999999997272","key":"2"})
  );
});

TouchSwipeRightGap.displayName = 'TouchSwipeRightGap';

export default TouchSwipeRightGap;
export { TouchSwipeRightGap };
