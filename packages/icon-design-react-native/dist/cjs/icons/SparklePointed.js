'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SparklePointed = forwardRef(function SparklePointed(
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
    createElement(Path, {"d":"M12 3L10 10L3 12L10 14L12 21L14 14L21 12L14 10Z","key":"0"})
  );
});

SparklePointed.displayName = 'SparklePointed';

module.exports = SparklePointed;
module.exports.SparklePointed = SparklePointed;
module.exports.default = SparklePointed;
