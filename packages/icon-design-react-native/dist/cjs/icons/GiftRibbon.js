'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GiftRibbon = forwardRef(function GiftRibbon(
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
    createElement(Path, {"d":"M3 13L21 13L21 21C21 21.551 20.551 22 20 22L4 22C3.449 22 3 21.551 3 21Z","key":"0"}),
    createElement(Path, {"d":"M3 13L21 13C21.551 13 22 12.551 22 12L22 9C22 8.449 21.551 8 21 8L3 8C2.449 8 2 8.449 2 9L2 12C2 12.551 2.449 13 3 13Z","key":"1"}),
    createElement(Path, {"d":"M10 8L10 22","key":"2"}),
    createElement(Path, {"d":"M14 8L14 22","key":"3"}),
    createElement(Path, {"d":"M9 2C10.656 2 12 3.344 12 5L12 8L9 8C7.344 8 6 6.656 6 5C6 3.344 7.344 2 9 2Z","key":"4"}),
    createElement(Path, {"d":"M15 2C13.344 2 12 3.344 12 5L12 8L15 8C16.656 8 18 6.656 18 5C18 3.344 16.656 2 15 2Z","key":"5"})
  );
});

GiftRibbon.displayName = 'GiftRibbon';

module.exports = GiftRibbon;
module.exports.GiftRibbon = GiftRibbon;
module.exports.default = GiftRibbon;
