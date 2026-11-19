'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const TouchSwipeLeftGap = forwardRef(function TouchSwipeLeftGap(
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
    createElement(Polyline, {"points":"5.025268549024986 14.99878273928698 2.025268549155953 11.998782739152375 5.02526854928692 8.99878273928698","key":"0"}),
    createElement(Line, {"x1":"10.025268549155953","y1":"11.998782739512535","x2":"2.025268549155953","y2":"11.998782739152375","key":"1"}),
    createElement(Circle, {"cx":"18.025268549153679","cy":"11.998782739871785","r":"3.999999999999318","key":"2"})
  );
});

TouchSwipeLeftGap.displayName = 'TouchSwipeLeftGap';

module.exports = TouchSwipeLeftGap;
module.exports.TouchSwipeLeftGap = TouchSwipeLeftGap;
module.exports.default = TouchSwipeLeftGap;
