'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const FormRadio = forwardRef(function FormRadio(
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
    createElement(Line, {"x1":"18.000000000251021","y1":"11.999999995703547","x2":"22.000000000251021","y2":"11.999999995703547","key":"0"}),
    createElement(Circle, {"cx":"8.000000000251021","cy":"11.999999995703547","r":"6","key":"1"})
  );
});

FormRadio.displayName = 'FormRadio';

module.exports = FormRadio;
module.exports.FormRadio = FormRadio;
module.exports.default = FormRadio;
