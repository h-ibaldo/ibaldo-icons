'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ServerPlusCircle = forwardRef(function ServerPlusCircle(
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
    createElement(Path, {"d":"M7 5L6 5","key":"0"}),
    createElement(Path, {"d":"M18.902 16L21 16C21.551 16 22 16.449 22 17L22 21C22 21.551 21.551 22 21 22L3 22C2.449 22 2 21.551 2 21L2 17C2 16.449 2.449 16 3 16L5 16","key":"1"}),
    createElement(Path, {"d":"M5.098 8L3 8C2.449 8 2 7.551 2 7L2 3C2 2.449 2.449 2 3 2L21 2C21.551 2 22 2.449 22 3L22 7C22 7.551 21.551 8 21 8L19 8","key":"2"}),
    createElement(Path, {"d":"M7 19L6 19","key":"3"}),
    createElement(Path, {"d":"M7 12C7 9.238 9.238 7 12 7C14.762 7 17 9.238 17 12C17 14.762 14.762 17 12 17C9.238 17 7 14.762 7 12Z","key":"4"}),
    createElement(Path, {"d":"M12 10L12 14","key":"5"}),
    createElement(Path, {"d":"M12 10L12 14","key":"6"}),
    createElement(Path, {"d":"M14 12L10 12","key":"7"})
  );
});

ServerPlusCircle.displayName = 'ServerPlusCircle';

module.exports = ServerPlusCircle;
module.exports.ServerPlusCircle = ServerPlusCircle;
module.exports.default = ServerPlusCircle;
