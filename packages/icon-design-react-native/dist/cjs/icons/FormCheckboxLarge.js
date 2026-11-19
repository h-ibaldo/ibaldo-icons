'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const FormCheckboxLarge = forwardRef(function FormCheckboxLarge(
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
    createElement(Rect, {"x":"1.999999995794496","y":"5.998779324585485","width":"12.000000013754288","height":"11.999999973355443","rx":".999999999999889","ry":".999999999999889","key":"0"}),
    createElement(Line, {"x1":"18.000000014479156","y1":"11.998779303612537","x2":"22.000000014479156","y2":"11.998779303612537","key":"1"})
  );
});

FormCheckboxLarge.displayName = 'FormCheckboxLarge';

module.exports = FormCheckboxLarge;
module.exports.FormCheckboxLarge = FormCheckboxLarge;
module.exports.default = FormCheckboxLarge;
