'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const AlertSquare = forwardRef(function AlertSquare(
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
    createElement(Line, {"x1":"11.974731450040053","y1":"16.010000000480431","x2":"11.974731450040053","y2":"16.000000000479304","key":"0"}),
    createElement(Line, {"x1":"11.974731450040053","y1":"8.000000000479304","x2":"11.974731450040053","y2":"12.000000000479304","key":"1"}),
    createElement(Rect, {"x":"1.974731450049148","y":"2.000000000928594","width":"20","height":"20","rx":"3","ry":"3","key":"2"})
  );
});

AlertSquare.displayName = 'AlertSquare';

module.exports = AlertSquare;
module.exports.AlertSquare = AlertSquare;
module.exports.default = AlertSquare;
