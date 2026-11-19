'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PaperclipMinusShort = forwardRef(function PaperclipMinusShort(
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
    createElement(Path, {"d":"M12.105 14L18.277 7.828C19.383 6.723 19.383 4.934 18.277 3.828C17.172 2.723 15.383 2.723 14.277 3.828L5.555 12.551C3.621 14.484 3.621 17.617 5.555 19.551C7.488 21.484 10.621 21.484 12.555 19.551L21 11.105","key":"0"}),
    createElement(Path, {"d":"M3 4L8 4","key":"1"})
  );
});

PaperclipMinusShort.displayName = 'PaperclipMinusShort';

module.exports = PaperclipMinusShort;
module.exports.PaperclipMinusShort = PaperclipMinusShort;
module.exports.default = PaperclipMinusShort;
