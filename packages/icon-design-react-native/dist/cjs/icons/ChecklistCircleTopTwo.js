'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const ChecklistCircleTopTwo = forwardRef(function ChecklistCircleTopTwo(
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
    createElement(Circle, {"cx":"3.949462885138928","cy":"20.000000000480213","r":"2","key":"0"}),
    createElement(Line, {"x1":"10.949462885138928","y1":"4.000000000480213","x2":"21.949462885138928","y2":"4.000000000480213","key":"1"}),
    createElement(Line, {"x1":"10.949462885138928","y1":"12.000000000480213","x2":"21.949462885138928","y2":"12.000000000480213","key":"2"}),
    createElement(Line, {"x1":"10.949462885138928","y1":"20.000000000480213","x2":"21.949462885138928","y2":"20.000000000480213","key":"3"}),
    createElement(Polyline, {"points":"1.949462885138928 4.000000000480213 3.949462885138928 6.000000000480213 6.949462885138928 2.000000000480213","key":"4"}),
    createElement(Polyline, {"points":"1.949462885138928 12.000000000480213 3.949462885138928 14.000000000480213 6.949462885138928 10.000000000480213","key":"5"})
  );
});

ChecklistCircleTopTwo.displayName = 'ChecklistCircleTopTwo';

module.exports = ChecklistCircleTopTwo;
module.exports.ChecklistCircleTopTwo = ChecklistCircleTopTwo;
module.exports.default = ChecklistCircleTopTwo;
