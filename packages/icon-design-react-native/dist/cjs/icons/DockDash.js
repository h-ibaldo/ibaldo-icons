'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const DockDash = forwardRef(function DockDash(
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
    createElement(Path, {"d":"M2 19L2 5C2 4.449 2.449 4 3 4L21 4C21.551 4 22 4.449 22 5L22 19C22 19.551 21.551 20 21 20L3 20C2.449 20 2 19.551 2 19Z","key":"0"}),
    createElement(Path, {"d":"M15 16L9 16","key":"1"})
  );
});

DockDash.displayName = 'DockDash';

module.exports = DockDash;
module.exports.DockDash = DockDash;
module.exports.default = DockDash;
