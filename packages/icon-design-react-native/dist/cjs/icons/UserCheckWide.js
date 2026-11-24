'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const UserCheckWide = forwardRef(function UserCheckWide(
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
    createElement(Path, {"d":"M7 7C7 4.238 9.238 2 12 2C14.762 2 17 4.238 17 7C17 9.762 14.762 12 12 12C9.238 12 7 9.762 7 7Z","key":"0"}),
    createElement(Path, {"d":"M3 22L3 21C3 16.031 7.031 12 12 12C14.832 12 17.359 13.309 19.008 15.352","key":"1"}),
    createElement(Path, {"d":"M16 20L17.5 22L22 18","key":"2"})
  );
});

UserCheckWide.displayName = 'UserCheckWide';

module.exports = UserCheckWide;
module.exports.UserCheckWide = UserCheckWide;
module.exports.default = UserCheckWide;
