'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PaperclipXNarrow = forwardRef(function PaperclipXNarrow(
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
    createElement(Path, {"d":"M15.965 7.035L9.621 13.379C8.793 14.207 8.793 15.551 9.621 16.379C10.449 17.207 11.793 17.207 12.621 16.379L20.965 8.035C22.344 6.656 22.344 4.414 20.965 3.035C19.582 1.656 17.344 1.656 15.965 3.035L5.449 13.551C3.516 15.484 3.516 18.617 5.449 20.551C7.383 22.484 10.516 22.484 12.449 20.551L20.965 12.035","key":"0"}),
    createElement(Path, {"d":"M6 6L2 2","key":"1"}),
    createElement(Path, {"d":"M6 2L2 6","key":"2"})
  );
});

PaperclipXNarrow.displayName = 'PaperclipXNarrow';

module.exports = PaperclipXNarrow;
module.exports.PaperclipXNarrow = PaperclipXNarrow;
module.exports.default = PaperclipXNarrow;
