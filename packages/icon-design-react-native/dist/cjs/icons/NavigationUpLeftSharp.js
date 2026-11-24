'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const NavigationUpLeftSharp = forwardRef(function NavigationUpLeftSharp(
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
    createElement(Path, {"d":"M4 4L21 11L13 13L11 21Z","key":"0"})
  );
});

NavigationUpLeftSharp.displayName = 'NavigationUpLeftSharp';

module.exports = NavigationUpLeftSharp;
module.exports.NavigationUpLeftSharp = NavigationUpLeftSharp;
module.exports.default = NavigationUpLeftSharp;
