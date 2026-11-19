'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const WindowEditPlain = forwardRef(function WindowEditPlain(
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
    createElement(Path, {"d":"M7 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 9","key":"0"}),
    createElement(Path, {"d":"M2 7L22 7","key":"1"}),
    createElement(Path, {"d":"M7 12L12 12","key":"2"}),
    createElement(Path, {"d":"M7 16L9 16","key":"3"}),
    createElement(Path, {"d":"M20.414 12.414L20.586 12.586C21.367 13.367 21.367 14.633 20.586 15.414L14 22L11 22L11 19L17.586 12.414C18.367 11.633 19.633 11.633 20.414 12.414Z","key":"4"}),
    createElement(Path, {"d":"M16 14L19 17","key":"5"})
  );
});

WindowEditPlain.displayName = 'WindowEditPlain';

module.exports = WindowEditPlain;
module.exports.WindowEditPlain = WindowEditPlain;
module.exports.default = WindowEditPlain;
