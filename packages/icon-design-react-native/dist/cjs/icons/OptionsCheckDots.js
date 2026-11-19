'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const OptionsCheckDots = forwardRef(function OptionsCheckDots(
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
    createElement(Path, {"d":"M16 22C12.688 22 10 19.313 10 16C10 12.688 12.688 10 16 10C19.313 10 22 12.688 22 16C22 19.313 19.313 22 16 22Z","key":"0"}),
    createElement(Path, {"d":"M18 16L18 16","key":"1"}),
    createElement(Path, {"d":"M14 16L14 16","key":"2"}),
    createElement(Path, {"d":"M5.852 7.5L6.949 8.602L9.148 6.398","key":"3"}),
    createElement(Path, {"d":"M12.973 7C12.723 4.195 10.367 2 7.5 2C4.461 2 2 4.461 2 7.5C2 10.367 4.199 12.723 7 12.977","key":"4"})
  );
});

OptionsCheckDots.displayName = 'OptionsCheckDots';

module.exports = OptionsCheckDots;
module.exports.OptionsCheckDots = OptionsCheckDots;
module.exports.default = OptionsCheckDots;
