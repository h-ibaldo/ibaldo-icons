'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronDoubleDown = forwardRef(function ChevronDoubleDown(
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
    createElement(Path, {"d":"M20 11L12 19L4 11","key":"0"}),
    createElement(Path, {"d":"M20 5L12 13L4 5","key":"1"})
  );
});

ChevronDoubleDown.displayName = 'ChevronDoubleDown';

module.exports = ChevronDoubleDown;
module.exports.ChevronDoubleDown = ChevronDoubleDown;
module.exports.default = ChevronDoubleDown;
