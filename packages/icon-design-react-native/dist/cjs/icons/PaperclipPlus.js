'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PaperclipPlus = forwardRef(function PaperclipPlus(
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
    createElement(Path, {"d":"M16 9L11 14C10.172 14.828 10.172 16.172 11 16.996L11.004 17C11.828 17.828 13.172 17.828 14 17L20.758 10.242C22.414 8.586 22.414 5.898 20.758 4.242C19.102 2.586 16.414 2.586 14.758 4.242L7.863 11.137C5.379 13.621 5.379 17.648 7.863 20.133L7.867 20.137C10.352 22.621 14.379 22.621 16.863 20.137L22 15","key":"0"}),
    createElement(Path, {"d":"M2 5L8 5","key":"1"}),
    createElement(Path, {"d":"M5 2L5 8","key":"2"})
  );
});

PaperclipPlus.displayName = 'PaperclipPlus';

module.exports = PaperclipPlus;
module.exports.PaperclipPlus = PaperclipPlus;
module.exports.default = PaperclipPlus;
