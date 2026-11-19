'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CodeXSmall = forwardRef(function CodeXSmall(
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
    createElement(Path, {"d":"M9 15L15 9","key":"0"}),
    createElement(Path, {"d":"M15 15L9 9","key":"1"}),
    createElement(Path, {"d":"M18 4C19.105 4 20 4.895 20 6L20 9.172C20 9.703 20.211 10.211 20.586 10.586L22 12L20.586 13.414C20.211 13.789 20 14.297 20 14.828L20 18C20 19.105 19.105 20 18 20","key":"2"}),
    createElement(Path, {"d":"M6 20C4.895 20 4 19.105 4 18L4 14.828C4 14.297 3.789 13.789 3.414 13.414L2 12L3.414 10.586C3.789 10.211 4 9.703 4 9.172L4 6C4 4.895 4.895 4 6 4","key":"3"})
  );
});

CodeXSmall.displayName = 'CodeXSmall';

module.exports = CodeXSmall;
module.exports.CodeXSmall = CodeXSmall;
module.exports.default = CodeXSmall;
