'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const UserChatWide = forwardRef(function UserChatWide(
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
    createElement(Path, {"d":"M15 15C15 16.656 13.656 18 12 18C10.344 18 9 16.656 9 15C9 13.344 10.344 12 12 12C13.656 12 15 13.344 15 15Z","key":"0"}),
    createElement(Path, {"d":"M17 22C17 19.789 15.211 18 13 18L11 18C8.789 18 7 19.789 7 22","key":"1"}),
    createElement(Path, {"d":"M8 8L3 8C2.445 8 2 7.555 2 7L2 4C2 3.445 2.445 3 3 3L9 3C9.555 3 10 3.445 10 4L10 9Z","key":"2"}),
    createElement(Path, {"d":"M16 7L21 7C21.555 7 22 6.555 22 6L22 3C22 2.445 21.555 2 21 2L15 2C14.445 2 14 2.445 14 3L14 8Z","key":"3"})
  );
});

UserChatWide.displayName = 'UserChatWide';

module.exports = UserChatWide;
module.exports.UserChatWide = UserChatWide;
module.exports.default = UserChatWide;
