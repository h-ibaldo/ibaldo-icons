'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line } = RNSvg;

const SpinnerRaysDotted = forwardRef(function SpinnerRaysDotted(
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
    createElement(Line, {"x1":"11.949462885142566","y1":"2.000000000480213","x2":"11.949462885142566","y2":"6.000000000480213","key":"0"}),
    createElement(Line, {"x1":"21.949462885140747","y1":"12.000000000480213","x2":"17.949462885142566","y2":"12.000000000480213","key":"1"}),
    createElement(Line, {"x1":"16.192103572164342","y1":"16.242640687691164","x2":"19.020530696848255","y2":"19.071067812503316","key":"2"}),
    createElement(Line, {"x1":"19.020530697161121","y1":"4.928932188769977","x2":"16.192106388159118","y2":"7.757362129254034","key":"3"}),
    createElement(Line, {"x1":"11.959462885142784","y1":"18.000000000480213","x2":"11.949462885142566","y2":"18.000000000480213","key":"4"}),
    createElement(Line, {"x1":"11.959462885142784","y1":"22.000000000480213","x2":"11.949462885142566","y2":"22.000000000480213","key":"5"}),
    createElement(Line, {"x1":"7.716822198115551","y1":"16.242640687694802","x2":"7.706822198116242","y2":"16.242640687694802","key":"6"}),
    createElement(Line, {"x1":"4.888395073436186","y1":"19.071067812503316","x2":"4.878395073435968","y2":"19.071067812503316","key":"7"}),
    createElement(Line, {"x1":"5.959462885140965","y1":"12.000000000749424","x2":"5.949462885140747","y2":"12.000000000749424","key":"8"}),
    createElement(Line, {"x1":"1.959462885142784","y1":"12.000000000927685","x2":"1.949462885142566","y2":"12.000000000927685","key":"9"}),
    createElement(Line, {"x1":"7.716822197735382","y1":"7.757359313643974","x2":"7.706822197734255","y2":"7.757359313643974","key":"10"}),
    createElement(Line, {"x1":"4.88839507279954","y1":"4.928932189090119","x2":"4.878395072799321","y2":"4.928932189090119","key":"11"})
  );
});

SpinnerRaysDotted.displayName = 'SpinnerRaysDotted';

module.exports = SpinnerRaysDotted;
module.exports.SpinnerRaysDotted = SpinnerRaysDotted;
module.exports.default = SpinnerRaysDotted;
