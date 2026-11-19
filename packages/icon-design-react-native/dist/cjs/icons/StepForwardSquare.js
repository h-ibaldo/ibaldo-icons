'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const StepForwardSquare = forwardRef(function StepForwardSquare(
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
    createElement(Path, {"d":"M7 17L7 7","key":"0"}),
    createElement(Path, {"d":"M10.945 15.836L10.945 8.164C10.945 7.313 11.941 6.848 12.59 7.402L17.105 11.238C17.574 11.637 17.574 12.363 17.105 12.762L12.59 16.598C11.941 17.152 10.945 16.691 10.945 15.836Z","key":"1"}),
    createElement(Path, {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"2"})
  );
});

StepForwardSquare.displayName = 'StepForwardSquare';

module.exports = StepForwardSquare;
module.exports.StepForwardSquare = StepForwardSquare;
module.exports.default = StepForwardSquare;
