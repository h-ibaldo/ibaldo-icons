'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline, Rect } = RNSvg;

const BoxTapeLabel = forwardRef(function BoxTapeLabel(
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
    createElement(Rect, {"x":"2","y":"1.999999999998181","width":"20","height":"20","rx":"1","ry":"1","key":"0"}),
    createElement(Polyline, {"points":"15 1.999999999998181 15 7.999999999998181 14 6.999999999998181 13 7.999999999998181 12 6.999999999998181 11 7.999999999998181 10 6.999999999998181 9 7.999999999998181 9 1.999999999998181","key":"1"}),
    createElement(Rect, {"x":"11","y":"13.999999999998181","width":"7","height":"3.999999999688953","key":"2"})
  );
});

BoxTapeLabel.displayName = 'BoxTapeLabel';

module.exports = BoxTapeLabel;
module.exports.BoxTapeLabel = BoxTapeLabel;
module.exports.default = BoxTapeLabel;
