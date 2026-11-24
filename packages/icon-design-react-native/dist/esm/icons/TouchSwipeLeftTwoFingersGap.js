import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const TouchSwipeLeftTwoFingersGap = forwardRef(function TouchSwipeLeftTwoFingersGap(
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
    createElement(Polyline, {"points":"4.974731434245768 2.998779304496566 1.974731434245768 5.998779304496566 4.974731434245768 8.998779304496566","key":"0"}),
    createElement(Line, {"x1":"9.974731434245768","y1":"5.998779304496566","x2":"1.974731434245768","y2":"5.998779304496566","key":"1"}),
    createElement(Circle, {"cx":"17.974731434245768","cy":"5.998779304496566","r":"4","key":"2"}),
    createElement(Polyline, {"points":"4.974731433706438 14.998779304496566 1.974731433706438 17.998779304496566 4.974731433706438 20.998779304496566","key":"3"}),
    createElement(Line, {"x1":"9.974731433706438","y1":"17.998779304496566","x2":"1.974731433706438","y2":"17.998779304496566","key":"4"}),
    createElement(Circle, {"cx":"17.974731433706438","cy":"17.998779304496566","r":"4","key":"5"})
  );
});

TouchSwipeLeftTwoFingersGap.displayName = 'TouchSwipeLeftTwoFingersGap';

export default TouchSwipeLeftTwoFingersGap;
export { TouchSwipeLeftTwoFingersGap };
