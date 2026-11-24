'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const UserCircle = forwardRef(function UserCircle(
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
    createElement(Path, {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement(Path, {"d":"M9 9C9 7.344 10.344 6 12 6C13.656 6 15 7.344 15 9C15 10.656 13.656 12 12 12C10.344 12 9 10.656 9 9Z","key":"1"}),
    createElement(Path, {"d":"M6 20L6 19C6 16.789 7.789 15 10 15L14 15C16.211 15 18 16.789 18 19L18 20","key":"2"})
  );
});

UserCircle.displayName = 'UserCircle';

module.exports = UserCircle;
module.exports.UserCircle = UserCircle;
module.exports.default = UserCircle;
