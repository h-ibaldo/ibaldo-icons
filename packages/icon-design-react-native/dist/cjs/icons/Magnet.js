'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Magnet = forwardRef(function Magnet(
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
    createElement(Path, {"d":"M2 10L6 14L11.516 8.484C12.621 7.379 14.41 7.379 15.516 8.484C16.621 9.59 16.621 11.379 15.516 12.484L10 18L14 22L19.516 16.484C22.828 13.172 22.828 7.801 19.516 4.484C16.199 1.172 10.828 1.172 7.516 4.484Z","key":"0"}),
    createElement(Path, {"d":"M5 7L9 11","key":"1"}),
    createElement(Path, {"d":"M13 15L17 19","key":"2"})
  );
});

Magnet.displayName = 'Magnet';

module.exports = Magnet;
module.exports.Magnet = Magnet;
module.exports.default = Magnet;
