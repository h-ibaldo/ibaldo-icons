'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CodeSlashSquareLarge = forwardRef(function CodeSlashSquareLarge(
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
    createElement(Path, {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement(Path, {"d":"M9 6C7.895 6 7 6.895 7 8L7 9.172C7 9.703 6.789 10.211 6.414 10.586L5 12L6.414 13.414C6.789 13.789 7 14.297 7 14.828L7 16C7 17.105 7.895 18 9 18","key":"1"}),
    createElement(Path, {"d":"M15 6C16.105 6 17 6.895 17 8L17 9.172C17 9.703 17.211 10.211 17.586 10.586L19 12L17.586 13.414C17.211 13.789 17 14.297 17 14.828L17 16C17 17.105 16.105 18 15 18","key":"2"}),
    createElement(Path, {"d":"M11 15L13 9","key":"3"})
  );
});

CodeSlashSquareLarge.displayName = 'CodeSlashSquareLarge';

module.exports = CodeSlashSquareLarge;
module.exports.CodeSlashSquareLarge = CodeSlashSquareLarge;
module.exports.default = CodeSlashSquareLarge;
