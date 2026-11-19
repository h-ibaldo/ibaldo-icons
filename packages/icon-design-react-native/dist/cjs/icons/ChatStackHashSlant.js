'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackHashSlant = forwardRef(function ChatStackHashSlant(
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
    createElement(Path, {"d":"M2 9L2 16C2 17.656 3.344 19 5 19L7 19L7 22L12 19L15 19C16.656 19 18 17.656 18 16L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z","key":"0"}),
    createElement(Path, {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L7 2","key":"1"}),
    createElement(Path, {"d":"M9 9L7 16","key":"2"}),
    createElement(Path, {"d":"M13 9L11 16","key":"3"}),
    createElement(Path, {"d":"M7 11L14 11","key":"4"}),
    createElement(Path, {"d":"M6 14L13 14","key":"5"})
  );
});

ChatStackHashSlant.displayName = 'ChatStackHashSlant';

module.exports = ChatStackHashSlant;
module.exports.ChatStackHashSlant = ChatStackHashSlant;
module.exports.default = ChatStackHashSlant;
