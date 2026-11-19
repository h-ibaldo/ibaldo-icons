'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const HourglassSquareRound = forwardRef(function HourglassSquareRound(
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
    createElement(Path, {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement(Path, {"d":"M14.895 10.551L12 12L9.105 10.551C8.43 10.215 8 9.523 8 8.766L8 7L16 7L16 8.766C16 9.523 15.57 10.215 14.895 10.551Z","key":"1"}),
    createElement(Path, {"d":"M9.105 13.449L12 12L14.895 13.449C15.57 13.785 16 14.477 16 15.234L16 17L8 17L8 15.234C8 14.477 8.43 13.785 9.105 13.449Z","key":"2"})
  );
});

HourglassSquareRound.displayName = 'HourglassSquareRound';

module.exports = HourglassSquareRound;
module.exports.HourglassSquareRound = HourglassSquareRound;
module.exports.default = HourglassSquareRound;
