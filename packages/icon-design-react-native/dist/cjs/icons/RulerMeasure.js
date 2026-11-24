'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const RulerMeasure = forwardRef(function RulerMeasure(
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
    createElement(Path, {"d":"M3 11L21 11C21.551 11 22 11.449 22 12L22 18C22 18.551 21.551 19 21 19L3 19C2.449 19 2 18.551 2 18L2 12C2 11.449 2.449 11 3 11Z","key":"0"}),
    createElement(Path, {"d":"M6 14L6 11","key":"1"}),
    createElement(Path, {"d":"M2 8L2 4","key":"2"}),
    createElement(Path, {"d":"M22 8L22 4","key":"3"}),
    createElement(Path, {"d":"M2 6L22 6","key":"4"}),
    createElement(Path, {"d":"M10 14L10 11","key":"5"}),
    createElement(Path, {"d":"M14 14L14 11","key":"6"}),
    createElement(Path, {"d":"M18 14L18 11","key":"7"})
  );
});

RulerMeasure.displayName = 'RulerMeasure';

module.exports = RulerMeasure;
module.exports.RulerMeasure = RulerMeasure;
module.exports.default = RulerMeasure;
