import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SwitchDialLeft = forwardRef(function SwitchDialLeft(
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
    createElement(Circle, {"cx":"11.999999977274911","cy":"15.99999656343698","r":"5.999999999997044","key":"0"}),
    createElement(Line, {"x1":"13.999999977360858","y1":"17.99999656334694","x2":"9.999999977180778","y2":"13.999996563525201","key":"1"}),
    createElement(Circle, {"cx":"11.999999976737854","cy":"3.99999656343789","r":"2.000000000001364","key":"2"}),
    createElement(Circle, {"cx":"3.999999976737854","cy":"3.99999656379714","r":"2.000000000001819","key":"3"}),
    createElement(Circle, {"cx":"19.999999976737854","cy":"3.99999656307773","r":"2.000000000001364","key":"4"}),
    createElement(Line, {"x1":"3.999999976740582","y1":"3.999996563798049","x2":"3.999999976740582","y2":"3.999996563798049","key":"5"})
  );
});

SwitchDialLeft.displayName = 'SwitchDialLeft';

export default SwitchDialLeft;
export { SwitchDialLeft };
