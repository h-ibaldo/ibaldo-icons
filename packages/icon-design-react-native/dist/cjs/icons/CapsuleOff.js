'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CapsuleOff = forwardRef(function CapsuleOff(
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
    createElement(Path, {"d":"M17 2L7 22","key":"0"}),
    createElement(Path, {"d":"M15 6L6.5 6C4.016 6 2 8.016 2 10.5C2 12.984 4.016 15 6.5 15L10.5 15","key":"1"}),
    createElement(Path, {"d":"M9 18L17.5 18C19.984 18 22 15.984 22 13.5C22 11.016 19.984 9 17.5 9L13.5 9","key":"2"})
  );
});

CapsuleOff.displayName = 'CapsuleOff';

module.exports = CapsuleOff;
module.exports.CapsuleOff = CapsuleOff;
module.exports.default = CapsuleOff;
