'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FolderClock = forwardRef(function FolderClock(
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
    createElement(Path, {"d":"M10 21L4 21C2.895 21 2 20.105 2 19L2 5C2 3.895 2.895 3 4 3L7.93 3C8.598 3 9.223 3.336 9.594 3.891L10.406 5.109C10.777 5.664 11.402 6 12.07 6L20 6C21.105 6 22 6.895 22 8L22 9","key":"0"}),
    createElement(Path, {"d":"M22 16C22 18.762 19.762 21 17 21C14.238 21 12 18.762 12 16C12 13.238 14.238 11 17 11C19.762 11 22 13.238 22 16Z","key":"1"}),
    createElement(Path, {"d":"M17 14L17 16L19 16","key":"2"})
  );
});

FolderClock.displayName = 'FolderClock';

module.exports = FolderClock;
module.exports.FolderClock = FolderClock;
module.exports.default = FolderClock;
