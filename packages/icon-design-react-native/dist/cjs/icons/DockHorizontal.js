'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const DockHorizontal = forwardRef(function DockHorizontal(
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
    createElement(Rect, {"x":"1.974731417511066","y":"1.998779298535737","width":"20","height":"20","rx":"1","ry":"1","key":"0"}),
    createElement(Line, {"x1":"1.974731417511066","y1":"5.998779298535737","x2":"21.974731417511066","y2":"5.998779298535737","key":"1"}),
    createElement(Line, {"x1":"10.974731417511066","y1":"9.998779298535737","x2":"11.974731417511066","y2":"9.998779298535737","key":"2"}),
    createElement(Line, {"x1":"10.974731417511066","y1":"13.998779298535737","x2":"11.974731417511066","y2":"13.998779298535737","key":"3"}),
    createElement(Line, {"x1":"10.974731417511066","y1":"13.998779298535737","x2":"11.974731417511066","y2":"13.998779298535737","key":"4"}),
    createElement(Line, {"x1":"10.974731417511066","y1":"17.998779298535737","x2":"11.974731417511066","y2":"17.998779298535737","key":"5"})
  );
});

DockHorizontal.displayName = 'DockHorizontal';

module.exports = DockHorizontal;
module.exports.DockHorizontal = DockHorizontal;
module.exports.default = DockHorizontal;
