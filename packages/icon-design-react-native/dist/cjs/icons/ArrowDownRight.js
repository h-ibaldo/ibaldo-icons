'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownRight = forwardRef(function ArrowDownRight(
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
    createElement(Path, {"d":"M18 6L18 18L6 18","key":"0"}),
    createElement(Path, {"d":"M18 18L6 6","key":"1"})
  );
});

ArrowDownRight.displayName = 'ArrowDownRight';

module.exports = ArrowDownRight;
module.exports.ArrowDownRight = ArrowDownRight;
module.exports.default = ArrowDownRight;
