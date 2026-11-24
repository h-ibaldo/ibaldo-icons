'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SparklePlusDouble = forwardRef(function SparklePlusDouble(
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
    createElement(Path, {"d":"M4 12C8.695 12 12.5 15.582 12.5 20","key":"0"}),
    createElement(Path, {"d":"M21 12C16.305 12 12.5 15.582 12.5 20","key":"1"}),
    createElement(Path, {"d":"M21 12C16.305 12 12.5 8.418 12.5 4","key":"2"}),
    createElement(Path, {"d":"M4 12C8.695 12 12.5 8.418 12.5 4","key":"3"}),
    createElement(Path, {"d":"M5.5 3L5.5 8","key":"4"}),
    createElement(Path, {"d":"M8 5.5L3 5.5","key":"5"}),
    createElement(Path, {"d":"M19.5 17L19.5 20","key":"6"}),
    createElement(Path, {"d":"M21 18.5L18 18.5","key":"7"})
  );
});

SparklePlusDouble.displayName = 'SparklePlusDouble';

module.exports = SparklePlusDouble;
module.exports.SparklePlusDouble = SparklePlusDouble;
module.exports.default = SparklePlusDouble;
