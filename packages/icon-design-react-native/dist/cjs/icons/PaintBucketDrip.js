'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PaintBucketDrip = forwardRef(function PaintBucketDrip(
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
    createElement(Path, {"d":"M4 9L4 20C4 21.105 4.895 22 6 22L18 22C19.105 22 20 21.105 20 20L20 9","key":"0"}),
    createElement(Path, {"d":"M2 9L5 9","key":"1"}),
    createElement(Path, {"d":"M11 9L22 9","key":"2"}),
    createElement(Path, {"d":"M8 13L8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6L16 9","key":"3"}),
    createElement(Path, {"d":"M7 13C7 12.449 7.449 12 8 12C8.551 12 9 12.449 9 13C9 13.551 8.551 14 8 14C7.449 14 7 13.551 7 13Z","key":"4"}),
    createElement(Path, {"d":"M17 9L17 15.5C17 16.328 16.328 17 15.5 17C14.672 17 14 16.328 14 15.5L14 13C12.895 13 12 12.105 12 11L12 9","key":"5"})
  );
});

PaintBucketDrip.displayName = 'PaintBucketDrip';

module.exports = PaintBucketDrip;
module.exports.PaintBucketDrip = PaintBucketDrip;
module.exports.default = PaintBucketDrip;
