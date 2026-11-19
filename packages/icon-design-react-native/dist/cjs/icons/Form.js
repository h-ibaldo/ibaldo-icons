'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const Form = forwardRef(function Form(
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
    createElement(Rect, {"x":"2.000000005000402","y":"2.000000003886271","width":"20","height":"5","rx":"1","ry":"1","key":"0"}),
    createElement(Rect, {"x":"2.000000005000402","y":"11.000000003886271","width":"20","height":"5","rx":"1","ry":"1","key":"1"}),
    createElement(Rect, {"x":"12.000000002616162","y":"20.000000004948035","width":"10","height":"1.999999987357029","rx":".999999001110285","ry":".999999001110285","key":"2"}),
    createElement(Line, {"x1":"2.000000005029506","y1":"2.000000003866262","x2":"12.000000005029506","y2":"2.000000003866262","key":"3"})
  );
});

Form.displayName = 'Form';

module.exports = Form;
module.exports.Form = Form;
module.exports.default = Form;
