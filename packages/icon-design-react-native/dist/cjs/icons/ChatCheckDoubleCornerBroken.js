'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatCheckDoubleCornerBroken = forwardRef(function ChatCheckDoubleCornerBroken(
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
    createElement(Path, {"d":"M12 4L13.5 6L18 2","key":"0"}),
    createElement(Path, {"d":"M16.801 7.066L17.5 8L22 4","key":"1"}),
    createElement(Path, {"d":"M8 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"2"}),
    createElement(Path, {"d":"M22 11L22 15C22 16.656 20.656 18 19 18L15 18L12 22","key":"3"})
  );
});

ChatCheckDoubleCornerBroken.displayName = 'ChatCheckDoubleCornerBroken';

module.exports = ChatCheckDoubleCornerBroken;
module.exports.ChatCheckDoubleCornerBroken = ChatCheckDoubleCornerBroken;
module.exports.default = ChatCheckDoubleCornerBroken;
