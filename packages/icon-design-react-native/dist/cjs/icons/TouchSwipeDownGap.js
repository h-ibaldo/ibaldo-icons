'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const TouchSwipeDownGap = forwardRef(function TouchSwipeDownGap(
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
    createElement(Polyline, {"points":"9.025268549155953 18.998782739599847 12.025268549155953 21.998782739599847 15.025268549155953 18.998782739599847","key":"0"}),
    createElement(Line, {"x1":"12.025268549155953","y1":"13.998782739599847","x2":"12.025268549155953","y2":"21.998782739599847","key":"1"}),
    createElement(Circle, {"cx":"12.025268549155953","cy":"5.998782739599847","r":"4","key":"2"})
  );
});

TouchSwipeDownGap.displayName = 'TouchSwipeDownGap';

module.exports = TouchSwipeDownGap;
module.exports.TouchSwipeDownGap = TouchSwipeDownGap;
module.exports.default = TouchSwipeDownGap;
