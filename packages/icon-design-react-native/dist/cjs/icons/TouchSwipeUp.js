'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const TouchSwipeUp = forwardRef(function TouchSwipeUp(
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
    createElement(Polyline, {"points":"9.025268549155953 6.998782739599847 12.025268549155953 3.998782739599847 15.025268549155953 6.998782739599847","key":"0"}),
    createElement(Line, {"x1":"12.025268549155953","y1":"11.998782739599847","x2":"12.025268549155953","y2":"3.998782739599847","key":"1"}),
    createElement(Circle, {"cx":"12.025268549155953","cy":"15.998782739599847","r":"4","key":"2"})
  );
});

TouchSwipeUp.displayName = 'TouchSwipeUp';

module.exports = TouchSwipeUp;
module.exports.TouchSwipeUp = TouchSwipeUp;
module.exports.default = TouchSwipeUp;
