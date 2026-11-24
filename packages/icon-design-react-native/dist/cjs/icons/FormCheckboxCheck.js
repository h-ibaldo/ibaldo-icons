'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const FormCheckboxCheck = forwardRef(function FormCheckboxCheck(
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
    createElement(Polyline, {"points":"5.050537107349555 11.998779300163733 6.550537107349555 13.498779300163733 9.050537107350465 10.498779300163733","key":"0"}),
    createElement(Line, {"x1":"16.050537107350465","y1":"11.998779300163733","x2":"22.050537107350465","y2":"11.998779300163733","key":"1"}),
    createElement(Rect, {"x":"2.050537107349555","y":"6.998779300163733","width":"10.000000000000909","height":"10","rx":"1","ry":"1","key":"2"})
  );
});

FormCheckboxCheck.displayName = 'FormCheckboxCheck';

module.exports = FormCheckboxCheck;
module.exports.FormCheckboxCheck = FormCheckboxCheck;
module.exports.default = FormCheckboxCheck;
