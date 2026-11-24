'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const FormCheckboxLong = forwardRef(function FormCheckboxLong(
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
    createElement(Line, {"x1":"13.050537107350465","y1":"11.998779300185561","x2":"22.050537107350465","y2":"11.998779300185561","key":"0"}),
    createElement(Rect, {"x":"2.050537107350465","y":"7.998779300185561","width":"8","height":"8","rx":"1","ry":"1","key":"1"})
  );
});

FormCheckboxLong.displayName = 'FormCheckboxLong';

module.exports = FormCheckboxLong;
module.exports.FormCheckboxLong = FormCheckboxLong;
module.exports.default = FormCheckboxLong;
