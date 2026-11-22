'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const UserPlus = forwardRef(function UserPlus(
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
    createElement(Path, {"d":"M8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6C16 8.211 14.211 10 12 10C9.789 10 8 8.211 8 6Z","key":"0"}),
    createElement(Path, {"d":"M4 22L4 19C4 15.688 6.688 13 10 13L14 13C14.766 13 15.5 13.145 16.176 13.406","key":"1"}),
    createElement(Path, {"d":"M18 16L18 22","key":"2"}),
    createElement(Path, {"d":"M21 19L15 19","key":"3"})
  );
});

UserPlus.displayName = 'UserPlus';

module.exports = UserPlus;
module.exports.UserPlus = UserPlus;
module.exports.default = UserPlus;
