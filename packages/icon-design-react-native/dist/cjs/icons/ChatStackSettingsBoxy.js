'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackSettingsBoxy = forwardRef(function ChatStackSettingsBoxy(
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
    createElement(Path, {"d":"M18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18","key":"0"}),
    createElement(Path, {"d":"M18.52 13L13.324 13L10.727 17.5L13.324 22L18.52 22L21.121 17.5Z","key":"1"}),
    createElement(Path, {"d":"M16.922 17.5C16.922 16.945 16.477 16.5 15.922 16.5C15.371 16.5 14.922 16.945 14.922 17.5C14.922 18.055 15.371 18.5 15.922 18.5C16.477 18.5 16.922 18.055 16.922 17.5Z","key":"2"}),
    createElement(Path, {"d":"M22 11L22 5C22 3.344 20.656 2 19 2L8 2","key":"3"})
  );
});

ChatStackSettingsBoxy.displayName = 'ChatStackSettingsBoxy';

module.exports = ChatStackSettingsBoxy;
module.exports.ChatStackSettingsBoxy = ChatStackSettingsBoxy;
module.exports.default = ChatStackSettingsBoxy;
