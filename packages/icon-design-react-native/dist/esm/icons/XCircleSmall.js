import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const XCircleSmall = forwardRef(function XCircleSmall(
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
    createElement(Line, {"x1":"9.999999990879587","y1":"14.000000000806722","x2":"13.999999990699507","y2":"10.000000000986802","key":"0"}),
    createElement(Line, {"x1":"13.999999990610377","y1":"14.000000000894943","x2":"9.999999990970537","y2":"10.000000000897671","key":"1"}),
    createElement(Circle, {"cx":"11.999999990790457","cy":"12.000000000897671","r":"10","key":"2"})
  );
});

XCircleSmall.displayName = 'XCircleSmall';

export default XCircleSmall;
export { XCircleSmall };
