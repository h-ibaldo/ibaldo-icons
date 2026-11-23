'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const HighlighterBare = forwardRef(function HighlighterBare(
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
    createElement(Path, {"d":"M14.293 2.707L6.707 10.293C6.316 10.684 6.316 11.316 6.707 11.707L12.293 17.293C12.684 17.684 13.316 17.684 13.707 17.293L21.293 9.707C21.684 9.316 21.684 8.684 21.293 8.293L15.707 2.707C15.316 2.316 14.684 2.316 14.293 2.707Z","key":"0"}),
    createElement(Path, {"d":"M12.5 17.5L11 19L8 19L7 20L4 17L5 16L5 13L6.5 11.5","key":"1"}),
    createElement(Path, {"d":"M6.5 19.5L5 21L2 20L4.5 17.5","key":"2"})
  );
});

HighlighterBare.displayName = 'HighlighterBare';

module.exports = HighlighterBare;
module.exports.HighlighterBare = HighlighterBare;
module.exports.default = HighlighterBare;
