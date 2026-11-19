'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Rect } = RNSvg;

const FormCentered = forwardRef(function FormCentered(
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
    createElement(Rect, {"x":"7.000000002616162","y":"20.000000004948035","width":"10","height":"1.999999987357029","rx":".999998940923852","ry":".999998940923852","key":"2"})
  );
});

FormCentered.displayName = 'FormCentered';

module.exports = FormCentered;
module.exports.FormCentered = FormCentered;
module.exports.default = FormCentered;
