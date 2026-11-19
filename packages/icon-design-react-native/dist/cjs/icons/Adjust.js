'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const Adjust = forwardRef(function Adjust(
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
    createElement(Circle, {"cx":"8.00000001495664","cy":"12.000000015211299","r":"3","key":"0"}),
    createElement(Line, {"x1":"11.00000001495664","y1":"12.000000015211299","x2":"21.999999995498911","y2":"12.000000015211299","key":"1"}),
    createElement(Line, {"x1":"1.99999999550073","y1":"12.000000015211299","x2":"5.00000001495664","y2":"12.000000015211299","key":"2"}),
    createElement(Circle, {"cx":"16.000000014954821","cy":"5.000000024597284","r":"3","key":"3"}),
    createElement(Line, {"x1":"13.000000014954821","y1":"5.000000024597284","x2":"1.999999995501639","y2":"5.000000024597284","key":"4"}),
    createElement(Line, {"x1":"21.99999999550073","y1":"5.000000024597284","x2":"19.00000001495664","y2":"5.000000024597284","key":"5"}),
    createElement(Circle, {"cx":"16.000000014954821","cy":"19.000000015211299","r":"3","key":"6"}),
    createElement(Line, {"x1":"13.000000014954821","y1":"19.000000015211299","x2":"1.999999995501639","y2":"19.000000015211299","key":"7"}),
    createElement(Line, {"x1":"21.99999999550073","y1":"19.000000015211299","x2":"19.00000001495664","y2":"19.000000015211299","key":"8"})
  );
});

Adjust.displayName = 'Adjust';

module.exports = Adjust;
module.exports.Adjust = Adjust;
module.exports.default = Adjust;
