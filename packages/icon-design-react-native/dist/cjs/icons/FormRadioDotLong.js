'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const FormRadioDotLong = forwardRef(function FormRadioDotLong(
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
    createElement(Circle, {"cx":"5.999999991070581","cy":"12","r":"4","key":"0"}),
    createElement(Line, {"x1":"14","y1":"12","x2":"22","y2":"12","key":"1"}),
    createElement(Line, {"x1":"6.009999991070799","y1":"12","x2":"6","y2":"12","key":"2"})
  );
});

FormRadioDotLong.displayName = 'FormRadioDotLong';

module.exports = FormRadioDotLong;
module.exports.FormRadioDotLong = FormRadioDotLong;
module.exports.default = FormRadioDotLong;
