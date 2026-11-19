'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const PlusCircle = forwardRef(function PlusCircle(
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
    createElement(Line, {"x1":"11.974731445219732","y1":"8.0000000004502","x2":"11.974731445219732","y2":"16.0000000004502","key":"0"}),
    createElement(Line, {"x1":"15.974731445219732","y1":"12.0000000004502","x2":"7.974731445219732","y2":"12.0000000004502","key":"1"}),
    createElement(Circle, {"cx":"11.974731445219732","cy":"12.000000000446562","r":"10","key":"2"})
  );
});

PlusCircle.displayName = 'PlusCircle';

module.exports = PlusCircle;
module.exports.PlusCircle = PlusCircle;
module.exports.default = PlusCircle;
