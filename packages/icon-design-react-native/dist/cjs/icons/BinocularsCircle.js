'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BinocularsCircle = forwardRef(function BinocularsCircle(
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
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement(Path, {"d":"M10 14C10 12.895 9.105 12 8 12C6.895 12 6 12.895 6 14C6 15.105 6.895 16 8 16C9.105 16 10 15.105 10 14Z","key":"1"}),
    createElement(Path, {"d":"M18 14C18 12.895 17.105 12 16 12C14.895 12 14 12.895 14 14C14 15.105 14.895 16 16 16C17.105 16 18 15.105 18 14Z","key":"2"}),
    createElement(Path, {"d":"M10 10L14 10","key":"3"}),
    createElement(Path, {"d":"M10 14L14 14","key":"4"}),
    createElement(Path, {"d":"M10 14L10 9.621C10 8.727 9.273 8 8.379 8L8.371 8C7.582 8 6.906 8.57 6.773 9.355L6 14","key":"5"}),
    createElement(Path, {"d":"M14 14L14 9.621C14 8.727 14.727 8 15.621 8L15.629 8C16.418 8 17.094 8.57 17.227 9.355L18 14","key":"6"})
  );
});

BinocularsCircle.displayName = 'BinocularsCircle';

module.exports = BinocularsCircle;
module.exports.BinocularsCircle = BinocularsCircle;
module.exports.default = BinocularsCircle;
