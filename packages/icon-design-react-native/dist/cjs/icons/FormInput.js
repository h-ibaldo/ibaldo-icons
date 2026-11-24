'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const FormInput = forwardRef(function FormInput(
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
    createElement(Rect, {"x":"2","y":"6","width":"20","height":"12.000000000003638","rx":"2","ry":"2","key":"0"}),
    createElement(Line, {"x1":"10","y1":"13.989999999999782","x2":"10","y2":"14","key":"1"}),
    createElement(Line, {"x1":"6","y1":"13.989999999999782","x2":"6","y2":"14","key":"2"}),
    createElement(Line, {"x1":"14","y1":"13.989999999999782","x2":"14","y2":"14","key":"3"})
  );
});

FormInput.displayName = 'FormInput';

module.exports = FormInput;
module.exports.FormInput = FormInput;
module.exports.default = FormInput;
