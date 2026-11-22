'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const UserArrowRightCenter = forwardRef(function UserArrowRightCenter(
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
    createElement(Path, {"d":"M8 19L16 19","key":"0"}),
    createElement(Path, {"d":"M13 22L16 19L13 16","key":"1"}),
    createElement(Path, {"d":"M8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6C16 8.211 14.211 10 12 10C9.789 10 8 8.211 8 6Z","key":"2"}),
    createElement(Path, {"d":"M4 22L4 19C4 15.688 6.688 13 10 13L14 13C17.313 13 20 15.688 20 19L20 22","key":"3"})
  );
});

UserArrowRightCenter.displayName = 'UserArrowRightCenter';

module.exports = UserArrowRightCenter;
module.exports.UserArrowRightCenter = UserArrowRightCenter;
module.exports.default = UserArrowRightCenter;
