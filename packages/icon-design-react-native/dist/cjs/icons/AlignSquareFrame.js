'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const AlignSquareFrame = forwardRef(function AlignSquareFrame(
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
    createElement(Path, {"d":"M8 14L8 10C8 8.895 8.895 8 10 8L14 8C15.105 8 16 8.895 16 10L16 14C16 15.105 15.105 16 14 16L10 16C8.895 16 8 15.105 8 14Z","key":"0"}),
    createElement(Path, {"d":"M5 2L19 2","key":"1"}),
    createElement(Path, {"d":"M5 22L19 22","key":"2"}),
    createElement(Path, {"d":"M22 5L22 19","key":"3"}),
    createElement(Path, {"d":"M2 5L2 19","key":"4"})
  );
});

AlignSquareFrame.displayName = 'AlignSquareFrame';

module.exports = AlignSquareFrame;
module.exports.AlignSquareFrame = AlignSquareFrame;
module.exports.default = AlignSquareFrame;
