'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackCheckDoubleCornerFlipped = forwardRef(function ChatStackCheckDoubleCornerFlipped(
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
    createElement(Path, {"d":"M22 13L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18","key":"0"}),
    createElement(Path, {"d":"M12 7L13.5 9L18 5","key":"1"}),
    createElement(Path, {"d":"M16.801 10.066L17.5 11L22 7","key":"2"}),
    createElement(Path, {"d":"M9 5.199L5 2L5 6L4 6C2.895 6 2 6.895 2 8L2 12C2 13.105 2.895 14 4 14L15 14","key":"3"})
  );
});

ChatStackCheckDoubleCornerFlipped.displayName = 'ChatStackCheckDoubleCornerFlipped';

module.exports = ChatStackCheckDoubleCornerFlipped;
module.exports.ChatStackCheckDoubleCornerFlipped = ChatStackCheckDoubleCornerFlipped;
module.exports.default = ChatStackCheckDoubleCornerFlipped;
