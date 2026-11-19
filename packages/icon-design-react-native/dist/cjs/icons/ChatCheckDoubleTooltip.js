'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatCheckDoubleTooltip = forwardRef(function ChatCheckDoubleTooltip(
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
    createElement(Path, {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement(Path, {"d":"M7 9L8.5 11L13 7","key":"1"}),
    createElement(Path, {"d":"M11.801 12.066L12.5 13L17 9","key":"2"})
  );
});

ChatCheckDoubleTooltip.displayName = 'ChatCheckDoubleTooltip';

module.exports = ChatCheckDoubleTooltip;
module.exports.ChatCheckDoubleTooltip = ChatCheckDoubleTooltip;
module.exports.default = ChatCheckDoubleTooltip;
