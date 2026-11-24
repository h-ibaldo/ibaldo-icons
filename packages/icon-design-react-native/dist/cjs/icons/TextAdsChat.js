'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextAdsChat = forwardRef(function TextAdsChat(
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
    createElement(Path, {"d":"M22 16L16 16L8 21L8 16L4 16C2.895 16 2 15.105 2 14L2 4C2 2.895 2.895 2 4 2L22 2","key":"0"}),
    createElement(Path, {"d":"M6 12L8 6L10 12","key":"1"}),
    createElement(Path, {"d":"M14 6L13 6L13 12L14 12C15.105 12 16 11.105 16 10L16 8C16 6.895 15.105 6 14 6Z","key":"2"}),
    createElement(Path, {"d":"M19 11.5C19 11.5 19.449 12 20.5 12C21.328 12 22 11.328 22 10.5C22 9.672 21.207 9.215 20.5 9C19.707 8.762 19 8.328 19 7.5C19 6.672 19.672 6 20.5 6C21.551 6 22 6.5 22 6.5","key":"3"}),
    createElement(Path, {"d":"M7 11L9 11","key":"4"})
  );
});

TextAdsChat.displayName = 'TextAdsChat';

module.exports = TextAdsChat;
module.exports.TextAdsChat = TextAdsChat;
module.exports.default = TextAdsChat;
