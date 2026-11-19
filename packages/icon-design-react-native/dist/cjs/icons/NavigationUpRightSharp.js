'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const NavigationUpRightSharp = forwardRef(function NavigationUpRightSharp(
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
    createElement(Path, {"d":"M20 4L3 11L11 13L13 21Z","key":"0"})
  );
});

NavigationUpRightSharp.displayName = 'NavigationUpRightSharp';

module.exports = NavigationUpRightSharp;
module.exports.NavigationUpRightSharp = NavigationUpRightSharp;
module.exports.default = NavigationUpRightSharp;
