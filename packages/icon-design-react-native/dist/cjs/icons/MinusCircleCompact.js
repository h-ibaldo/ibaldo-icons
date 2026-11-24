'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const MinusCircleCompact = forwardRef(function MinusCircleCompact(
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
    createElement(Circle, {"cx":"12.000000004469257","cy":"12.000000003886498","r":"8.000000000000114","key":"0"}),
    createElement(Line, {"x1":"15.000000004469257","y1":"12.000000003885361","x2":"9.000000004469257","y2":"12.000000003885361","key":"1"})
  );
});

MinusCircleCompact.displayName = 'MinusCircleCompact';

module.exports = MinusCircleCompact;
module.exports.MinusCircleCompact = MinusCircleCompact;
module.exports.default = MinusCircleCompact;
