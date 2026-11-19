'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackWarningBoxy = forwardRef(function ChatStackWarningBoxy(
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
    createElement(Path, {"d":"M22 12L22 5C22 3.344 20.656 2 19 2L7 2","key":"0"}),
    createElement(Path, {"d":"M14.27 12.004L10.402 18.699C9.559 20.168 10.617 22 12.309 22L19.691 22C21.383 22 22.441 20.168 21.598 18.699L17.734 12.004C16.961 10.668 15.039 10.668 14.27 12.004Z","key":"1"}),
    createElement(Path, {"d":"M16 16L16 15","key":"2"}),
    createElement(Path, {"d":"M16 19L16 19","key":"3"}),
    createElement(Path, {"d":"M17.816 8C17.402 6.84 16.305 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18","key":"4"})
  );
});

ChatStackWarningBoxy.displayName = 'ChatStackWarningBoxy';

module.exports = ChatStackWarningBoxy;
module.exports.ChatStackWarningBoxy = ChatStackWarningBoxy;
module.exports.default = ChatStackWarningBoxy;
