'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const UserClock = forwardRef(function UserClock(
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
    createElement(Path, {"d":"M7 6C7 3.789 8.789 2 11 2C13.211 2 15 3.789 15 6C15 8.211 13.211 10 11 10C8.789 10 7 8.211 7 6Z","key":"0"}),
    createElement(Path, {"d":"M3 22L3 19C3 15.688 5.688 13 9 13L10 13","key":"1"}),
    createElement(Path, {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z","key":"2"}),
    createElement(Path, {"d":"M17 15L17 17L19 17","key":"3"})
  );
});

UserClock.displayName = 'UserClock';

module.exports = UserClock;
module.exports.UserClock = UserClock;
module.exports.default = UserClock;
