'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatCheckCornerSlant = forwardRef(function ChatCheckCornerSlant(
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
    createElement(Path, {"d":"M16 4L17.5 6L22 2","key":"0"}),
    createElement(Path, {"d":"M12 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.656 18 22 16.656 22 15L22 8","key":"1"})
  );
});

ChatCheckCornerSlant.displayName = 'ChatCheckCornerSlant';

module.exports = ChatCheckCornerSlant;
module.exports.ChatCheckCornerSlant = ChatCheckCornerSlant;
module.exports.default = ChatCheckCornerSlant;
