'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ClipboardPageText = forwardRef(function ClipboardPageText(
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
    createElement(Path, {"d":"M6 20L5 20C3.895 20 3 19.105 3 18L3 6C3 4.895 3.895 4 5 4L7 4","key":"0"}),
    createElement(Path, {"d":"M15 4L17 4C18.105 4 19 4.895 19 6L19 7","key":"1"}),
    createElement(Path, {"d":"M13.883 6.117L8.117 6.117C7.5 6.117 7 5.617 7 5L7 3.117C7 2.5 7.5 2 8.117 2L13.883 2C14.5 2 15 2.5 15 3.117L15 5C15 5.617 14.5 6.117 13.883 6.117Z","key":"2"}),
    createElement(Path, {"d":"M20 22L10 22C9.449 22 9 21.551 9 21L9 11C9 10.449 9.449 10 10 10L20 10C20.551 10 21 10.449 21 11L21 21C21 21.551 20.551 22 20 22Z","key":"3"}),
    createElement(Path, {"d":"M13 14L17 14","key":"4"}),
    createElement(Path, {"d":"M13 18L17 18","key":"5"})
  );
});

ClipboardPageText.displayName = 'ClipboardPageText';

module.exports = ClipboardPageText;
module.exports.ClipboardPageText = ClipboardPageText;
module.exports.default = ClipboardPageText;
