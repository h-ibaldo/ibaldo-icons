'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PaperclipShort = forwardRef(function PaperclipShort(
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
    createElement(Path, {"d":"M11.105 14L17.277 7.828C18.383 6.723 18.383 4.934 17.277 3.828C16.172 2.723 14.383 2.723 13.277 3.828L4.555 12.551C2.621 14.484 2.621 17.617 4.555 19.551C6.488 21.484 9.621 21.484 11.555 19.551L20 11.105","key":"0"})
  );
});

PaperclipShort.displayName = 'PaperclipShort';

module.exports = PaperclipShort;
module.exports.PaperclipShort = PaperclipShort;
module.exports.default = PaperclipShort;
