'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const OptionsCheckX = forwardRef(function OptionsCheckX(
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
    createElement(Path, {"d":"M11 16.5C11 19.539 13.461 22 16.5 22C19.539 22 22 19.539 22 16.5C22 13.461 19.539 11 16.5 11C13.461 11 11 13.461 11 16.5Z","key":"0"}),
    createElement(Path, {"d":"M15 15L18 18","key":"1"}),
    createElement(Path, {"d":"M18 15L15 18","key":"2"}),
    createElement(Path, {"d":"M12 7C12 9.762 9.762 12 7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2C9.762 2 12 4.238 12 7Z","key":"3"}),
    createElement(Path, {"d":"M5.5 7L6.5 8L8.5 6","key":"4"})
  );
});

OptionsCheckX.displayName = 'OptionsCheckX';

module.exports = OptionsCheckX;
module.exports.OptionsCheckX = OptionsCheckX;
module.exports.default = OptionsCheckX;
