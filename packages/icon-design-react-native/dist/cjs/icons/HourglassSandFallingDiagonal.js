'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const HourglassSandFallingDiagonal = forwardRef(function HourglassSandFallingDiagonal(
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
    createElement(Path, {"d":"M6.48 18.438C6.172 18.801 6 19.262 6 19.742L6 22L18 22L18 19.742C18 19.262 17.828 18.801 17.52 18.438L6.48 5.563C6.172 5.199 6 4.738 6 4.258L6 2L18 2L18 4.258C18 4.738 17.828 5.199 17.52 5.563","key":"0"}),
    createElement(Path, {"d":"M9.691 14.691L6.48 18.438","key":"1"}),
    createElement(Path, {"d":"M17.52 5.563L14.309 9.309","key":"2"}),
    createElement(Path, {"d":"M11 19L13 19","key":"3"}),
    createElement(Path, {"d":"M12 7L12 7","key":"4"})
  );
});

HourglassSandFallingDiagonal.displayName = 'HourglassSandFallingDiagonal';

module.exports = HourglassSandFallingDiagonal;
module.exports.HourglassSandFallingDiagonal = HourglassSandFallingDiagonal;
module.exports.default = HourglassSandFallingDiagonal;
