'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const InfoCircleSmall = forwardRef(function InfoCircleSmall(
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
    createElement(Circle, {"cx":"11.949462874325036","cy":"11.997562036765885","r":"8.000000000000455","key":"0"}),
    createElement(Line, {"x1":"11.949462874325036","y1":"8.987562036764757","x2":"11.949462874325036","y2":"8.997562036764975","key":"1"}),
    createElement(Line, {"x1":"11.949462874325036","y1":"14.997562036764975","x2":"11.949462874325036","y2":"11.997562036764975","key":"2"})
  );
});

InfoCircleSmall.displayName = 'InfoCircleSmall';

module.exports = InfoCircleSmall;
module.exports.InfoCircleSmall = InfoCircleSmall;
module.exports.default = InfoCircleSmall;
