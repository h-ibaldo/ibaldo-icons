'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BombFuse = forwardRef(function BombFuse(
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
    createElement(Path, {"d":"M11 8.293L11 6L7 6L7 8.293C4.109 9.156 2 11.828 2 15C2 18.867 5.133 22 9 22C12.867 22 16 18.867 16 15C16 11.828 13.891 9.156 11 8.293Z","key":"0"}),
    createElement(Path, {"d":"M21 8L22 9","key":"1"}),
    createElement(Path, {"d":"M21 5L22 4","key":"2"}),
    createElement(Path, {"d":"M18 8L17 9","key":"3"}),
    createElement(Path, {"d":"M18 5L16.758 3.758C15.633 2.633 14.105 2 12.516 2C10.574 2 9 3.574 9 5.516L9 6","key":"4"})
  );
});

BombFuse.displayName = 'BombFuse';

module.exports = BombFuse;
module.exports.BombFuse = BombFuse;
module.exports.default = BombFuse;
