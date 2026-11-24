'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PaperclipMinusVertical = forwardRef(function PaperclipMinusVertical(
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
    createElement(Path, {"d":"M15 9L15 16C15 19.313 12.313 22 9 22C5.688 22 3 19.313 3 16L3 6C3 3.789 4.789 2 7 2C9.211 2 11 3.789 11 6L11 15C11 16.105 10.105 17 9 17C7.895 17 7 16.105 7 15L7 9","key":"0"}),
    createElement(Path, {"d":"M21 4L16 4","key":"1"})
  );
});

PaperclipMinusVertical.displayName = 'PaperclipMinusVertical';

module.exports = PaperclipMinusVertical;
module.exports.PaperclipMinusVertical = PaperclipMinusVertical;
module.exports.default = PaperclipMinusVertical;
