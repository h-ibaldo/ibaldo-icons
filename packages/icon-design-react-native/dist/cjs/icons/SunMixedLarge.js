'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const SunMixedLarge = forwardRef(function SunMixedLarge(
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
    createElement(Circle, {"cx":"12","cy":"12.000000009875293","r":"6","key":"0"}),
    createElement(Line, {"x1":"2","y1":"12.000000009426003","x2":"3","y2":"12.000000009471478","key":"1"}),
    createElement(Line, {"x1":"21","y1":"12.000000010279109","x2":"22","y2":"12.000000010324584","key":"2"}),
    createElement(Line, {"x1":"12.00000000044929","y1":"2.000000009875293","x2":"12.000000000403816","y2":"3.000000009875293","key":"3"}),
    createElement(Line, {"x1":"11.999999999596184","y1":"21.000000009875293","x2":"11.99999999955071","y2":"22.000000009875293","key":"4"}),
    createElement(Line, {"x1":"4.928932188287945","y1":"4.928932197848553","x2":"7.757359312980043","y2":"7.757359322664342","key":"5"}),
    createElement(Line, {"x1":"16.242640687019957","y1":"16.242640697086244","x2":"19.07106781170296","y2":"19.071067821903853","key":"6"}),
    createElement(Line, {"x1":"19.07106781202674","y1":"4.928932198174152","x2":"16.242640687210951","y2":"7.757359322855336","key":"7"}),
    createElement(Line, {"x1":"7.757359312779954","y1":"16.242640696895251","x2":"4.92893218797326","y2":"19.071067821578254","key":"8"})
  );
});

SunMixedLarge.displayName = 'SunMixedLarge';

module.exports = SunMixedLarge;
module.exports.SunMixedLarge = SunMixedLarge;
module.exports.default = SunMixedLarge;
