'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatLettersRound = forwardRef(function ChatLettersRound(
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
    createElement(Path, {"d":"M14 15C13.172 15 12.5 14.328 12.5 13.5L12.5 10.5C12.5 9.672 13.172 9 14 9C14.828 9 15.5 9.672 15.5 10.5L15.5 13.5C15.5 14.328 14.828 15 14 15Z","key":"0"}),
    createElement(Path, {"d":"M6.5 15L7.5 15C8.328 15 9 14.328 9 13.5C9 12.672 8.328 12 7.5 12C6.672 12 6 11.328 6 10.5C6 9.672 6.672 9 7.5 9L8.5 9","key":"1"}),
    createElement(Path, {"d":"M19.5 15L20.5 15C21.328 15 22 14.328 22 13.5C22 12.672 21.328 12 20.5 12C19.672 12 19 11.328 19 10.5C19 9.672 19.672 9 20.5 9L21.5 9","key":"2"}),
    createElement(Path, {"d":"M19.137 5C17.32 3.148 14.797 2 12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.672 18.789L2 22L12 22C14.797 22 17.32 20.852 19.137 19","key":"3"})
  );
});

ChatLettersRound.displayName = 'ChatLettersRound';

module.exports = ChatLettersRound;
module.exports.ChatLettersRound = ChatLettersRound;
module.exports.default = ChatLettersRound;
