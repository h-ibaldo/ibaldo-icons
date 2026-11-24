'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const NavigationUpSharp = forwardRef(function NavigationUpSharp(
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
    createElement(Path, {"d":"M19 20L12.07 16L5 20L12 3Z","key":"0"})
  );
});

NavigationUpSharp.displayName = 'NavigationUpSharp';

module.exports = NavigationUpSharp;
module.exports.NavigationUpSharp = NavigationUpSharp;
module.exports.default = NavigationUpSharp;
