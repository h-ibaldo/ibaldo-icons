'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileTerminalCut = forwardRef(function FileTerminalCut(
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
    createElement(Path, {"d":"M19 17L19 4C19 2.895 18.105 2 17 2L8.984 2C8.355 2 7.75 2.25 7.305 2.695L3.695 6.305C3.25 6.75 3 7.355 3 7.984L3 20C3 21.105 3.895 22 5 22L7 22","key":"0"}),
    createElement(Path, {"d":"M11 15L14.5 18.5L11 22","key":"1"}),
    createElement(Path, {"d":"M16 22L21 22","key":"2"})
  );
});

FileTerminalCut.displayName = 'FileTerminalCut';

module.exports = FileTerminalCut;
module.exports.FileTerminalCut = FileTerminalCut;
module.exports.default = FileTerminalCut;
