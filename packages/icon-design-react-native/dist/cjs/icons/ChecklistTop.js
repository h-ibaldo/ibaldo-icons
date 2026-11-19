'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline } = RNSvg;

const ChecklistTop = forwardRef(function ChecklistTop(
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
    createElement(Line, {"x1":"10.949462885140747","y1":"4.000000000480213","x2":"21.949462885140747","y2":"4.000000000480213","key":"0"}),
    createElement(Line, {"x1":"10.949462885140747","y1":"12.000000000480213","x2":"21.949462885140747","y2":"12.000000000480213","key":"1"}),
    createElement(Line, {"x1":"10.949462885140747","y1":"20.000000000480213","x2":"21.949462885140747","y2":"20.000000000480213","key":"2"}),
    createElement(Polyline, {"points":"1.949462885140747 4.000000000480213 3.949462885140747 6.000000000480213 6.949462885140747 2.000000000480213","key":"3"})
  );
});

ChecklistTop.displayName = 'ChecklistTop';

module.exports = ChecklistTop;
module.exports.ChecklistTop = ChecklistTop;
module.exports.default = ChecklistTop;
