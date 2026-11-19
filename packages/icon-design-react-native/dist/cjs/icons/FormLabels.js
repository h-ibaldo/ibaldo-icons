'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const FormLabels = forwardRef(function FormLabels(
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
    createElement(Rect, {"x":"2.000000005000402","y":"5.000000003886271","width":"20","height":"5","rx":"1","ry":"1","key":"0"}),
    createElement(Rect, {"x":"2.000000005000402","y":"17.000000003886271","width":"20","height":"5","rx":"1","ry":"1","key":"1"}),
    createElement(Line, {"x1":"2.000000005000402","y1":"14.000000003886271","x2":"12.000000005000402","y2":"14.000000003886271","key":"2"}),
    createElement(Line, {"x1":"2.000000005000402","y1":"2.056394887018541","x2":"12.000000005000402","y2":"2.056394887018541","key":"3"})
  );
});

FormLabels.displayName = 'FormLabels';

module.exports = FormLabels;
module.exports.FormLabels = FormLabels;
module.exports.default = FormLabels;
