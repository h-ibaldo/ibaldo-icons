'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CodeCircle = forwardRef(function CodeCircle(
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
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement(Path, {"d":"M13 8L11 16","key":"1"}),
    createElement(Path, {"d":"M16 10L18 12L16 14","key":"2"}),
    createElement(Path, {"d":"M8 10L6 12L8 14","key":"3"})
  );
});

CodeCircle.displayName = 'CodeCircle';

module.exports = CodeCircle;
module.exports.CodeCircle = CodeCircle;
module.exports.default = CodeCircle;
