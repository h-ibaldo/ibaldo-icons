'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CircleOverlap = forwardRef(function CircleOverlap(
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
    createElement(Path, {"d":"M15.922 8C15.434 4.609 12.527 2 9 2C5.133 2 2 5.133 2 9C2 12.867 5.133 16 9 16C11.793 16 14.195 14.363 15.32 12","key":"0"}),
    createElement(Path, {"d":"M8.078 16C8.566 19.391 11.473 22 15 22C18.867 22 22 18.867 22 15C22 11.133 18.867 8 15 8C12.207 8 9.805 9.637 8.68 12","key":"1"})
  );
});

CircleOverlap.displayName = 'CircleOverlap';

module.exports = CircleOverlap;
module.exports.CircleOverlap = CircleOverlap;
module.exports.default = CircleOverlap;
