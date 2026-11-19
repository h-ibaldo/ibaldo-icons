'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackDollarCornerSlant = forwardRef(function ChatStackDollarCornerSlant(
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
    createElement(Path, {"d":"M2 14L2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L11 6","key":"0"}),
    createElement(Path, {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L11 2","key":"1"}),
    createElement(Path, {"d":"M7 3.5L6.449 3.316C5.82 3.105 5.16 3 4.5 3C3.395 3 2.5 3.895 2.5 5C2.5 6.105 3.395 7 4.5 7L5.5 7C6.605 7 7.5 7.895 7.5 9C7.5 10.105 6.605 11 5.5 11C4.84 11 4.18 10.895 3.551 10.684L3 10.5","key":"2"}),
    createElement(Path, {"d":"M5 2L5 3","key":"3"}),
    createElement(Path, {"d":"M5 11L5 12","key":"4"})
  );
});

ChatStackDollarCornerSlant.displayName = 'ChatStackDollarCornerSlant';

module.exports = ChatStackDollarCornerSlant;
module.exports.ChatStackDollarCornerSlant = ChatStackDollarCornerSlant;
module.exports.default = ChatStackDollarCornerSlant;
