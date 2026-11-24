'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const TouchSwipeLeft = forwardRef(function TouchSwipeLeft(
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
    createElement(Polyline, {"points":"7.025268549024986 14.99878273937793 4.025268549155953 11.998782739243325 7.02526854928692 8.99878273937793","key":"0"}),
    createElement(Line, {"x1":"12.025268549155953","y1":"11.998782739603485","x2":"4.025268549155953","y2":"11.998782739243325","key":"1"}),
    createElement(Circle, {"cx":"16.025268549153679","cy":"11.998782739781745","r":"3.999999999998863","key":"2"})
  );
});

TouchSwipeLeft.displayName = 'TouchSwipeLeft';

module.exports = TouchSwipeLeft;
module.exports.TouchSwipeLeft = TouchSwipeLeft;
module.exports.default = TouchSwipeLeft;
