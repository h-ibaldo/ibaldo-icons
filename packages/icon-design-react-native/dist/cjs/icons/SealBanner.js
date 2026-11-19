'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SealBanner = forwardRef(function SealBanner(
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
    createElement(Path, {"d":"M17 17L19 15L17 13L17 10L14 10L12 8L10 10L7 10L7 13L5 15L7 17L7 20L10 20L12 22L14 20L17 20Z","key":"0"}),
    createElement(Path, {"d":"M12 7L5 4L5 2L19 2L19 4Z","key":"1"})
  );
});

SealBanner.displayName = 'SealBanner';

module.exports = SealBanner;
module.exports.SealBanner = SealBanner;
module.exports.default = SealBanner;
