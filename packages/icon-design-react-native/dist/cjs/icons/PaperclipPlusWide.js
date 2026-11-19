'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PaperclipPlusWide = forwardRef(function PaperclipPlusWide(
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
    createElement(Path, {"d":"M9 2L3.863 7.137C1.379 9.621 1.379 13.648 3.863 16.133L3.867 16.137C6.352 18.621 10.379 18.621 12.863 16.137L19.758 9.242C21.414 7.586 21.414 4.902 19.758 3.246L19.754 3.242C18.098 1.586 15.414 1.586 13.758 3.242L7.121 9.879C6.293 10.707 6.293 12.051 7.121 12.879C7.949 13.707 9.293 13.707 10.121 12.879L15 8","key":"0"}),
    createElement(Path, {"d":"M16 19L22 19","key":"1"}),
    createElement(Path, {"d":"M19 16L19 22","key":"2"})
  );
});

PaperclipPlusWide.displayName = 'PaperclipPlusWide';

module.exports = PaperclipPlusWide;
module.exports.PaperclipPlusWide = PaperclipPlusWide;
module.exports.default = PaperclipPlusWide;
