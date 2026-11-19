'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatUnderlineSlant = forwardRef(function ChatUnderlineSlant(
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
    createElement(Path, {"d":"M2 5L2 11C2 12.656 3.344 14 5 14L8 14L8 18L14 14L19 14C20.656 14 22 12.656 22 11L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement(Path, {"d":"M19 22L5 22","key":"1"})
  );
});

ChatUnderlineSlant.displayName = 'ChatUnderlineSlant';

module.exports = ChatUnderlineSlant;
module.exports.ChatUnderlineSlant = ChatUnderlineSlant;
module.exports.default = ChatUnderlineSlant;
