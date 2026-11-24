'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const DatabasePlus = forwardRef(function DatabasePlus(
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
    createElement(Path, {"d":"M2 7C2 4.789 5.582 3 10 3C14.418 3 18 4.789 18 7C18 9.211 14.418 11 10 11C5.582 11 2 9.211 2 7Z","key":"0"}),
    createElement(Path, {"d":"M2 17L2 7","key":"1"}),
    createElement(Path, {"d":"M18 7L18 13","key":"2"}),
    createElement(Path, {"d":"M14 15.465C12.824 15.805 11.457 16 10 16C5.582 16 2 14.211 2 12","key":"3"}),
    createElement(Path, {"d":"M16 19L22 19","key":"4"}),
    createElement(Path, {"d":"M19 16L19 22","key":"5"}),
    createElement(Path, {"d":"M13.004 20.707C12.074 20.898 11.063 21 10 21C5.582 21 2 19.211 2 17","key":"6"})
  );
});

DatabasePlus.displayName = 'DatabasePlus';

module.exports = DatabasePlus;
module.exports.DatabasePlus = DatabasePlus;
module.exports.default = DatabasePlus;
