'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackOneCircleTooltip = forwardRef(function ChatStackOneCircleTooltip(
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
    createElement(Path, {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L15 2","key":"0"}),
    createElement(Path, {"d":"M2 15C2 16.656 3.344 18 5 18L7 18L10 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 8.117 17.609 7.332 17 6.785","key":"1"}),
    createElement(Path, {"d":"M13 7.5C13 10.535 10.535 13 7.5 13C4.465 13 2 10.535 2 7.5C2 4.465 4.465 2 7.5 2C10.535 2 13 4.465 13 7.5Z","key":"2"}),
    createElement(Path, {"d":"M8 9L8 6L7 6","key":"3"})
  );
});

ChatStackOneCircleTooltip.displayName = 'ChatStackOneCircleTooltip';

module.exports = ChatStackOneCircleTooltip;
module.exports.ChatStackOneCircleTooltip = ChatStackOneCircleTooltip;
module.exports.default = ChatStackOneCircleTooltip;
