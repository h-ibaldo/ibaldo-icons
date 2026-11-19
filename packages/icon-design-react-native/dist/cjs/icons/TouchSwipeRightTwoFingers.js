'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const TouchSwipeRightTwoFingers = forwardRef(function TouchSwipeRightTwoFingers(
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
    createElement(Polyline, {"points":"17.025268544746723 2.998779304674827 20.025268544335631 5.998779305078642 17.025268543935454 8.998779304674827","key":"0"}),
    createElement(Line, {"x1":"12.025268544335631","y1":"5.9987793040018","x2":"20.025268544335631","y2":"5.998779305078642","key":"1"}),
    createElement(Circle, {"cx":"8.025268544333358","cy":"5.99877930346338","r":"4.000000000001137","key":"2"}),
    createElement(Polyline, {"points":"17.025268544746723 14.998779304674827 20.025268544335631 17.998779305078642 17.025268543935454 20.998779304674827","key":"3"}),
    createElement(Line, {"x1":"12.025268544335631","y1":"17.9987793040018","x2":"20.025268544335631","y2":"17.998779305078642","key":"4"}),
    createElement(Circle, {"cx":"8.025268544333358","cy":"17.99877930346338","r":"4.000000000001137","key":"5"})
  );
});

TouchSwipeRightTwoFingers.displayName = 'TouchSwipeRightTwoFingers';

module.exports = TouchSwipeRightTwoFingers;
module.exports.TouchSwipeRightTwoFingers = TouchSwipeRightTwoFingers;
module.exports.default = TouchSwipeRightTwoFingers;
