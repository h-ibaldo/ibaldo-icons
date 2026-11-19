'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const RecordOffSquare = forwardRef(function RecordOffSquare(
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
    createElement(Path, {"d":"M17 8L7 16","key":"0"}),
    createElement(Path, {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"1"}),
    createElement(Path, {"d":"M8.113 15.109C9.031 16.254 10.422 17 12 17C14.762 17 17 14.762 17 12C17 10.816 16.574 9.746 15.887 8.891","key":"2"}),
    createElement(Path, {"d":"M13.258 7.191C12.855 7.082 12.438 7 12 7C9.238 7 7 9.238 7 12C7 12.063 7.012 12.125 7.02 12.184","key":"3"})
  );
});

RecordOffSquare.displayName = 'RecordOffSquare';

module.exports = RecordOffSquare;
module.exports.RecordOffSquare = RecordOffSquare;
module.exports.default = RecordOffSquare;
