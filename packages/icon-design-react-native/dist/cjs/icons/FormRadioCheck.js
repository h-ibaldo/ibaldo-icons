'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const FormRadioCheck = forwardRef(function FormRadioCheck(
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
    createElement(Line, {"x1":"18.00000000376167","y1":"11.999999998985004","x2":"22.00000000376167","y2":"11.999999998985004","key":"0"}),
    createElement(Circle, {"cx":"8.00000000376167","cy":"11.999999998985004","r":"6","key":"1"}),
    createElement(Polyline, {"points":"6.00000000376167 11.999999998985004 7.50000000376167 13.499999998985004 10.00000000376167 10.999999998985004","key":"2"})
  );
});

FormRadioCheck.displayName = 'FormRadioCheck';

module.exports = FormRadioCheck;
module.exports.FormRadioCheck = FormRadioCheck;
module.exports.default = FormRadioCheck;
