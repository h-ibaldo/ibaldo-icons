'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const TouchSwipeUpTwoFingers = forwardRef(function TouchSwipeUpTwoFingers(
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
    createElement(Polyline, {"points":"20.974731437145238 6.998779299483431 17.974731436876027 3.998779299752641 14.974731437145238 6.998779300021852","key":"0"}),
    createElement(Line, {"x1":"17.974731437596347","y1":"11.998779299752641","x2":"17.974731436876027","y2":"3.998779299752641","key":"1"}),
    createElement(Circle, {"cx":"17.974731437956052","cy":"15.998779299752641","r":"3.999999999999773","key":"2"}),
    createElement(Polyline, {"points":"8.974731437145238 6.99877929894501 5.974731436876027 3.99877929921422 2.974731437145238 6.998779299483431","key":"3"}),
    createElement(Line, {"x1":"5.974731437596347","y1":"11.99877929921422","x2":"5.974731436876027","y2":"3.99877929921422","key":"4"}),
    createElement(Circle, {"cx":"5.974731437956052","cy":"15.99877929921422","r":"3.999999999999773","key":"5"})
  );
});

TouchSwipeUpTwoFingers.displayName = 'TouchSwipeUpTwoFingers';

module.exports = TouchSwipeUpTwoFingers;
module.exports.TouchSwipeUpTwoFingers = TouchSwipeUpTwoFingers;
module.exports.default = TouchSwipeUpTwoFingers;
