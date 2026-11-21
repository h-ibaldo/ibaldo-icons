'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CameraKnob = forwardRef(function CameraKnob(
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
    createElement(Path, {"d":"M4 7L8 7L10 4L14 4L16 7L20 7C21.105 7 22 7.895 22 9L22 19C22 20.105 21.105 21 20 21L4 21C2.895 21 2 20.105 2 19L2 9C2 7.895 2.895 7 4 7Z","key":"0"}),
    createElement(Path, {"d":"M7.5 13.5C7.5 11.016 9.516 9 12 9C14.484 9 16.5 11.016 16.5 13.5C16.5 15.984 14.484 18 12 18C9.516 18 7.5 15.984 7.5 13.5Z","key":"1"}),
    createElement(Path, {"d":"M19 12L19 11","key":"2"}),
    createElement(Path, {"d":"M6 7L6 5L5 5L5 7","key":"3"})
  );
});

CameraKnob.displayName = 'CameraKnob';

module.exports = CameraKnob;
module.exports.CameraKnob = CameraKnob;
module.exports.default = CameraKnob;
