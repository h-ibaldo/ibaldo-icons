'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const MinusCircle = forwardRef(function MinusCircle(
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
    createElement(Line, {"x1":"16.000000004469257","y1":"12.000000003885361","x2":"8.000000004469257","y2":"12.000000003885361","key":"0"}),
    createElement(Circle, {"cx":"12.000000004469257","cy":"12.000000003885589","r":"9.999999999999659","key":"1"})
  );
});

MinusCircle.displayName = 'MinusCircle';

module.exports = MinusCircle;
module.exports.MinusCircle = MinusCircle;
module.exports.default = MinusCircle;
