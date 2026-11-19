'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const AlarmBanStraight = forwardRef(function AlarmBanStraight(
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
    createElement(Path, {"d":"M18 19L20 21","key":"0"}),
    createElement(Path, {"d":"M6 19L4 21","key":"1"}),
    createElement(Path, {"d":"M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z","key":"2"}),
    createElement(Path, {"d":"M16 13C16 10.789 14.211 9 12 9C9.789 9 8 10.789 8 13C8 15.211 9.789 17 12 17C14.211 17 16 15.211 16 13Z","key":"3"}),
    createElement(Path, {"d":"M14.828 10.172L9.172 15.828","key":"4"}),
    createElement(Path, {"d":"M17 2L21 5","key":"5"}),
    createElement(Path, {"d":"M7 2L3 5","key":"6"})
  );
});

AlarmBanStraight.displayName = 'AlarmBanStraight';

module.exports = AlarmBanStraight;
module.exports.AlarmBanStraight = AlarmBanStraight;
module.exports.default = AlarmBanStraight;
