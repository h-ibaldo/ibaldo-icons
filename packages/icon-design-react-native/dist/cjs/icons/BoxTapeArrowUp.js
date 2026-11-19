'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { G, Line, Polyline, Rect } = RNSvg;

const BoxTapeArrowUp = forwardRef(function BoxTapeArrowUp(
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
    createElement(G, {"key":"1"},
      createElement(Line, {"x1":"12","y1":"17.999999999998181","x2":"12","y2":"13.999999999998181","key":"0"}),
      createElement(Polyline, {"points":"11 14.999999999998181 12 13.999999999998181 13 14.999999999998181","key":"1"})),
    createElement(G, {"key":"2"},
      createElement(Line, {"x1":"17","y1":"17.999999999998181","x2":"17","y2":"13.999999999998181","key":"0"}),
      createElement(Polyline, {"points":"16 14.999999999998181 17 13.999999999998181 18 14.999999999998181","key":"1"})),
    createElement(Polyline, {"points":"9 1.999999999998181 9 6.999999999998181 15 6.999999999998181 15 1.999999999998181","key":"3"})
  );
});

BoxTapeArrowUp.displayName = 'BoxTapeArrowUp';

module.exports = BoxTapeArrowUp;
module.exports.BoxTapeArrowUp = BoxTapeArrowUp;
module.exports.default = BoxTapeArrowUp;
