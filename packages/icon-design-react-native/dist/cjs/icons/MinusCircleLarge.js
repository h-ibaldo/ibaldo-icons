'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const MinusCircleLarge = forwardRef(function MinusCircleLarge(
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
    createElement(Circle, {"cx":"12","cy":"12","r":"10","key":"0"}),
    createElement(Line, {"x1":"7","y1":"12","x2":"17","y2":"12","key":"1"})
  );
});

MinusCircleLarge.displayName = 'MinusCircleLarge';

module.exports = MinusCircleLarge;
module.exports.MinusCircleLarge = MinusCircleLarge;
module.exports.default = MinusCircleLarge;
