'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatQuoteRound = forwardRef(function ChatQuoteRound(
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
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"0"}),
    createElement(Path, {"d":"M14 9L17 9L17 11L14 11Z","key":"1"}),
    createElement(Path, {"d":"M14 15C15.723 14.539 17 12.93 17 11","key":"2"}),
    createElement(Path, {"d":"M7 9L10 9L10 11L7 11Z","key":"3"}),
    createElement(Path, {"d":"M7 15C8.723 14.539 10 12.93 10 11","key":"4"})
  );
});

ChatQuoteRound.displayName = 'ChatQuoteRound';

module.exports = ChatQuoteRound;
module.exports.ChatQuoteRound = ChatQuoteRound;
module.exports.default = ChatQuoteRound;
