'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Frame = forwardRef(function Frame(
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
    createElement(Path, {"d":"M2 6L22 6","key":"0"}),
    createElement(Path, {"d":"M2 18L22 18","key":"1"}),
    createElement(Path, {"d":"M6 22L6 2","key":"2"}),
    createElement(Path, {"d":"M18 22L18 2","key":"3"})
  );
});

Frame.displayName = 'Frame';

module.exports = Frame;
module.exports.Frame = Frame;
module.exports.default = Frame;
