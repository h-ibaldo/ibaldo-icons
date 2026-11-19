import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const TouchSwipeDownTwoFingers = forwardRef(function TouchSwipeDownTwoFingers(
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
    createElement(Polyline, {"points":"20.974731437505397 16.998779304023628 17.974731437225273 19.998779303754418 14.974731437505397 16.998779303485207","key":"0"}),
    createElement(Line, {"x1":"17.974731437956507","y1":"11.998779303754418","x2":"17.974731437225273","y2":"19.998779303754418","key":"1"}),
    createElement(Circle, {"cx":"17.974731438316212","cy":"7.998779303754418","r":"4.000000000000227","key":"2"}),
    createElement(Polyline, {"points":"8.974731437505397 16.998779304562049 5.974731437225273 19.998779304292839 2.974731437505397 16.998779304023628","key":"3"}),
    createElement(Line, {"x1":"5.974731437956507","y1":"11.998779304292839","x2":"5.974731437225273","y2":"19.998779304292839","key":"4"}),
    createElement(Circle, {"cx":"5.974731438316212","cy":"7.998779304292839","r":"4.000000000000227","key":"5"})
  );
});

TouchSwipeDownTwoFingers.displayName = 'TouchSwipeDownTwoFingers';

export default TouchSwipeDownTwoFingers;
export { TouchSwipeDownTwoFingers };
