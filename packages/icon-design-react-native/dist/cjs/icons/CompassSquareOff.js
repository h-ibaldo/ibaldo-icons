'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CompassSquareOff = forwardRef(function CompassSquareOff(
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
    createElement(Path, {"d":"M17 7L9 9L7 17L15 15Z","key":"1"}),
    createElement(Path, {"d":"M2.879 2.879L21.121 21.121","key":"2"})
  );
});

CompassSquareOff.displayName = 'CompassSquareOff';

module.exports = CompassSquareOff;
module.exports.CompassSquareOff = CompassSquareOff;
module.exports.default = CompassSquareOff;
