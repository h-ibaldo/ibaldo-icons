import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SwitchDialRight = forwardRef(function SwitchDialRight(
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
    createElement(Circle, {"cx":"11.999999977098014","cy":"15.99999656343698","r":"5.999999999998181","key":"0"}),
    createElement(Line, {"x1":"9.999999977100742","y1":"17.999996563434252","x2":"13.999999977100742","y2":"13.999996563434252","key":"1"}),
    createElement(Circle, {"cx":"11.999999977100742","cy":"3.99999656343789","r":"2","key":"2"}),
    createElement(Circle, {"cx":"19.999999977100742","cy":"3.99999656343789","r":"2","key":"3"}),
    createElement(Circle, {"cx":"3.999999977100742","cy":"3.99999656343789","r":"2","key":"4"}),
    createElement(Line, {"x1":"19.999999977100742","y1":"3.99999656343789","x2":"19.999999977100742","y2":"3.99999656343789","key":"5"})
  );
});

SwitchDialRight.displayName = 'SwitchDialRight';

export default SwitchDialRight;
export { SwitchDialRight };
