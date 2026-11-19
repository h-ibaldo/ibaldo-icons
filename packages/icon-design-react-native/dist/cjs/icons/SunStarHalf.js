'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon } = RNSvg;

const SunStarHalf = forwardRef(function SunStarHalf(
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
    createElement(Polygon, {"points":"18.999999990796823 15.000000000448381 21.999999990796823 12.000000000448381 18.999999990796823 9.000000000448381 18.999999990796823 5.000000000448381 14.999999990796823 5.000000000448381 11.999999990796823 2.000000000448381 8.999999990796823 5.000000000448381 4.999999990796823 5.000000000448381 4.999999990796823 9.000000000448381 1.999999990796823 12.000000000448381 4.999999990796823 15.000000000448381 4.999999990796823 19.000000000448381 8.999999990796823 19.000000000448381 11.999999990796823 22.000000000448381 14.999999990796823 19.000000000448381 18.999999990796823 19.000000000448381 18.999999990796823 15.000000000448381","key":"0"}),
    createElement(Line, {"x1":"11.999999990796823","y1":"20.000000000448381","x2":"10.999999990796823","y2":"21.000000000448381","key":"1"}),
    createElement(Line, {"x1":"11.999999990796823","y1":"16.000000000448381","x2":"8.999999990796823","y2":"19.000000000448381","key":"2"}),
    createElement(Line, {"x1":"11.999999990796823","y1":"12.000000000448381","x2":"4.999999990796823","y2":"19.000000000448381","key":"3"}),
    createElement(Line, {"x1":"6.999999990796823","y1":"5.000000000448381","x2":"4.999999990796823","y2":"7.000000000448381","key":"4"}),
    createElement(Line, {"x1":"11.999999990796823","y1":"4.000000000448381","x2":"2.999999990796823","y2":"13.000000000448381","key":"5"}),
    createElement(Line, {"x1":"11.999999990796823","y1":"8.000000000448381","x2":"4.999999990796823","y2":"15.000000000448381","key":"6"}),
    createElement(Line, {"x1":"11.999999990796823","y1":"2.000000000448381","x2":"11.999999990796823","y2":"22.000000000448381","key":"7"})
  );
});

SunStarHalf.displayName = 'SunStarHalf';

module.exports = SunStarHalf;
module.exports.SunStarHalf = SunStarHalf;
module.exports.default = SunStarHalf;
