'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const StepBackThick = forwardRef(function StepBackThick(
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
    createElement(Path, {"d":"M13 4.348L13 19.652C13 20.801 11.641 21.402 10.793 20.633L2.5 13.129C1.832 12.523 1.832 11.477 2.5 10.875L10.793 3.367C11.641 2.598 13 3.199 13 4.348Z","key":"0"}),
    createElement(Path, {"d":"M21 21L19 21C18.449 21 18 20.551 18 20L18 4C18 3.449 18.449 3 19 3L21 3C21.551 3 22 3.449 22 4L22 20C22 20.551 21.551 21 21 21Z","key":"1"})
  );
});

StepBackThick.displayName = 'StepBackThick';

module.exports = StepBackThick;
module.exports.StepBackThick = StepBackThick;
module.exports.default = StepBackThick;
