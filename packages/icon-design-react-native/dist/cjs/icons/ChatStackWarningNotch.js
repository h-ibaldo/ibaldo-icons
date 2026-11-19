'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackWarningNotch = forwardRef(function ChatStackWarningNotch(
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
    createElement(Path, {"d":"M10 2L4 2C2.895 2 2 2.895 2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L8 16","key":"0"}),
    createElement(Path, {"d":"M22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"1"}),
    createElement(Path, {"d":"M14.227 3L10.191 9.996C9.422 11.332 10.383 12.996 11.922 12.996L19.996 12.996C21.535 12.996 22.5 11.332 21.73 9.996L17.691 3C16.922 1.664 14.996 1.664 14.227 3Z","key":"2"}),
    createElement(Path, {"d":"M15.961 6.996L15.961 5.996","key":"3"}),
    createElement(Path, {"d":"M15.961 9.996L15.961 9.996","key":"4"})
  );
});

ChatStackWarningNotch.displayName = 'ChatStackWarningNotch';

module.exports = ChatStackWarningNotch;
module.exports.ChatStackWarningNotch = ChatStackWarningNotch;
module.exports.default = ChatStackWarningNotch;
