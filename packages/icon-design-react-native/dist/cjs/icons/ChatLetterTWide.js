'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatLetterTWide = forwardRef(function ChatLetterTWide(
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
    createElement(Path, {"d":"M14.5 3L9.5 3C5.359 3 2 6.355 2 10.5C2 13.766 4.09 16.531 7 17.563L7 22L11.668 18L14.5 18C18.641 18 22 14.645 22 10.5C22 6.355 18.641 3 14.5 3Z","key":"0"}),
    createElement(Path, {"d":"M10.5 7L10.5 12C10.5 13.105 11.395 14 12.5 14L13.5 14","key":"1"}),
    createElement(Path, {"d":"M13.5 9L10.5 9","key":"2"})
  );
});

ChatLetterTWide.displayName = 'ChatLetterTWide';

module.exports = ChatLetterTWide;
module.exports.ChatLetterTWide = ChatLetterTWide;
module.exports.default = ChatLetterTWide;
