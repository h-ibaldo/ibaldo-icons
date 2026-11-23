'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BetweenHorizontalEnd = forwardRef(function BetweenHorizontalEnd(
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
    createElement(Path, {"d":"M21 16L16.758 11.758L21 7.516","key":"0"}),
    createElement(Path, {"d":"M13 22L3 22L3 14L13 14Z","key":"1"}),
    createElement(Path, {"d":"M13 10L3 10L3 2L13 2Z","key":"2"})
  );
});

BetweenHorizontalEnd.displayName = 'BetweenHorizontalEnd';

module.exports = BetweenHorizontalEnd;
module.exports.BetweenHorizontalEnd = BetweenHorizontalEnd;
module.exports.default = BetweenHorizontalEnd;
