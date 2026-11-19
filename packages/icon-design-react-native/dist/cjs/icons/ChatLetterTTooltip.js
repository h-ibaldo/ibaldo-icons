'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatLetterTTooltip = forwardRef(function ChatLetterTTooltip(
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
    createElement(Path, {"d":"M10.5 6L10.5 12C10.5 13.105 11.395 14 12.5 14L13.5 14","key":"0"}),
    createElement(Path, {"d":"M13.5 9L10.5 9","key":"1"}),
    createElement(Path, {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"2"})
  );
});

ChatLetterTTooltip.displayName = 'ChatLetterTTooltip';

module.exports = ChatLetterTTooltip;
module.exports.ChatLetterTTooltip = ChatLetterTTooltip;
module.exports.default = ChatLetterTTooltip;
