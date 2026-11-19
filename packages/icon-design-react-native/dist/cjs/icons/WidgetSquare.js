'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const WidgetSquare = forwardRef(function WidgetSquare(
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
    createElement(Path, {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement(Path, {"d":"M8 22L8 11C8 9.344 9.344 8 11 8L22 8","key":"1"}),
    createElement(Path, {"d":"M8 14L22 14","key":"2"})
  );
});

WidgetSquare.displayName = 'WidgetSquare';

module.exports = WidgetSquare;
module.exports.WidgetSquare = WidgetSquare;
module.exports.default = WidgetSquare;
