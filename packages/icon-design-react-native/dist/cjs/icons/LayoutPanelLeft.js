'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LayoutPanelLeft = forwardRef(function LayoutPanelLeft(
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
    createElement(Path, {"d":"M9 22L3 22C2.449 22 2 21.551 2 21L2 3C2 2.449 2.449 2 3 2L9 2C9.551 2 10 2.449 10 3L10 21C10 21.551 9.551 22 9 22Z","key":"0"}),
    createElement(Path, {"d":"M21 22L15 22C14.449 22 14 21.551 14 21L14 15C14 14.449 14.449 14 15 14L21 14C21.551 14 22 14.449 22 15L22 21C22 21.551 21.551 22 21 22Z","key":"1"}),
    createElement(Path, {"d":"M21 10L15 10C14.449 10 14 9.551 14 9L14 3C14 2.449 14.449 2 15 2L21 2C21.551 2 22 2.449 22 3L22 9C22 9.551 21.551 10 21 10Z","key":"2"})
  );
});

LayoutPanelLeft.displayName = 'LayoutPanelLeft';

module.exports = LayoutPanelLeft;
module.exports.LayoutPanelLeft = LayoutPanelLeft;
module.exports.default = LayoutPanelLeft;
