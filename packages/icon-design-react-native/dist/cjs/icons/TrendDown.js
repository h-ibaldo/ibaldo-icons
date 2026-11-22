'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TrendDown = forwardRef(function TrendDown(
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
    createElement(Path, {"d":"M2 7L9 13L13 9L22 18","key":"0"}),
    createElement(Path, {"d":"M16 18L22 18L22 12","key":"1"})
  );
});

TrendDown.displayName = 'TrendDown';

module.exports = TrendDown;
module.exports.TrendDown = TrendDown;
module.exports.default = TrendDown;
