'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const OptionsCheckInfoSquare = forwardRef(function OptionsCheckInfoSquare(
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
    createElement(Path, {"d":"M19.602 22L12.398 22C11.074 22 10 20.926 10 19.602L10 12.398C10 11.074 11.074 10 12.398 10L19.602 10C20.926 10 22 11.074 22 12.398L22 19.602C22 20.926 20.926 22 19.602 22Z","key":"0"}),
    createElement(Path, {"d":"M16 13.5L16 13.5","key":"1"}),
    createElement(Path, {"d":"M16 16.5L16 18.5","key":"2"}),
    createElement(Path, {"d":"M5.852 7.5L6.949 8.602L9.148 6.398","key":"3"}),
    createElement(Path, {"d":"M12.973 7C12.723 4.195 10.367 2 7.5 2C4.461 2 2 4.461 2 7.5C2 10.367 4.199 12.723 7 12.977","key":"4"})
  );
});

OptionsCheckInfoSquare.displayName = 'OptionsCheckInfoSquare';

module.exports = OptionsCheckInfoSquare;
module.exports.OptionsCheckInfoSquare = OptionsCheckInfoSquare;
module.exports.default = OptionsCheckInfoSquare;
