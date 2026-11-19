'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const MinusCircleCompactLarge = forwardRef(function MinusCircleCompactLarge(
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
    createElement(Circle, {"cx":"12","cy":"12","r":"8","key":"0"}),
    createElement(Line, {"x1":"8","y1":"12","x2":"16","y2":"12","key":"1"})
  );
});

MinusCircleCompactLarge.displayName = 'MinusCircleCompactLarge';

module.exports = MinusCircleCompactLarge;
module.exports.MinusCircleCompactLarge = MinusCircleCompactLarge;
module.exports.default = MinusCircleCompactLarge;
