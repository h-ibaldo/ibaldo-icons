'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackTriangleFacing = forwardRef(function ChatStackTriangleFacing(
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
    createElement(Path, {"d":"M13.648 11L20.352 11C21.516 11 22.238 9.73 21.637 8.73L18.285 3.145C17.703 2.172 16.297 2.172 15.715 3.145L12.363 8.73C11.762 9.73 12.484 11 13.648 11Z","key":"0"}),
    createElement(Path, {"d":"M12 2L4 2C2.895 2 2 2.895 2 4L2 18L7 14L11 14","key":"1"}),
    createElement(Path, {"d":"M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 15","key":"2"})
  );
});

ChatStackTriangleFacing.displayName = 'ChatStackTriangleFacing';

module.exports = ChatStackTriangleFacing;
module.exports.ChatStackTriangleFacing = ChatStackTriangleFacing;
module.exports.default = ChatStackTriangleFacing;
