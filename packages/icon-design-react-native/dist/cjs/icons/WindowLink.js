'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const WindowLink = forwardRef(function WindowLink(
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
    createElement(Path, {"d":"M14 19L18 19","key":"0"}),
    createElement(Path, {"d":"M14 22L13 22C11.344 22 10 20.656 10 19C10 17.344 11.344 16 13 16L14 16","key":"1"}),
    createElement(Path, {"d":"M18 16L19 16C20.656 16 22 17.344 22 19C22 20.656 20.656 22 19 22L18 22","key":"2"}),
    createElement(Path, {"d":"M7 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 13","key":"3"}),
    createElement(Path, {"d":"M2 8L22 8","key":"4"}),
    createElement(Path, {"d":"M5 5L5 5","key":"5"}),
    createElement(Path, {"d":"M8 5L8 5","key":"6"}),
    createElement(Path, {"d":"M11 5L11 5","key":"7"})
  );
});

WindowLink.displayName = 'WindowLink';

module.exports = WindowLink;
module.exports.WindowLink = WindowLink;
module.exports.default = WindowLink;
