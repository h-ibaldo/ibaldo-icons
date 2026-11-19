'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const HourglassStandSquare = forwardRef(function HourglassStandSquare(
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
    createElement(Path, {"d":"M15 7L15 8.93C15 9.598 14.664 10.223 14.109 10.594L12 12L9.891 10.594C9.336 10.223 9 9.598 9 8.93L9 7","key":"1"}),
    createElement(Path, {"d":"M8 7L16 7","key":"2"}),
    createElement(Path, {"d":"M9 17L9 15.07C9 14.402 9.336 13.777 9.891 13.406L12 12L14.109 13.406C14.664 13.777 15 14.402 15 15.07L15 17","key":"3"}),
    createElement(Path, {"d":"M16 17L8 17","key":"4"})
  );
});

HourglassStandSquare.displayName = 'HourglassStandSquare';

module.exports = HourglassStandSquare;
module.exports.HourglassStandSquare = HourglassStandSquare;
module.exports.default = HourglassStandSquare;
