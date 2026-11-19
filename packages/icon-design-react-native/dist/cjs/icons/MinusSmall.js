'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line } = RNSvg;

const MinusSmall = forwardRef(function MinusSmall(
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
    createElement(Line, {"x1":"17.000000004469257","y1":"12.000000003885361","x2":"7.000000004469257","y2":"12.000000003885361","key":"0"})
  );
});

MinusSmall.displayName = 'MinusSmall';

module.exports = MinusSmall;
module.exports.MinusSmall = MinusSmall;
module.exports.default = MinusSmall;
