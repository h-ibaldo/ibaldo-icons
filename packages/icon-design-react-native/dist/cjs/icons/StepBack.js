'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const StepBack = forwardRef(function StepBack(
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
    createElement(Path, {"d":"M16 4.918L16 19.082C16 20.32 14.629 21.063 13.59 20.391L2.707 13.309C1.766 12.691 1.766 11.309 2.707 10.691L13.59 3.609C14.629 2.938 16 3.68 16 4.918Z","key":"0"}),
    createElement(Path, {"d":"M22 4L22 20","key":"1"})
  );
});

StepBack.displayName = 'StepBack';

module.exports = StepBack;
module.exports.StepBack = StepBack;
module.exports.default = StepBack;
