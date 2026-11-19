'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowRight = forwardRef(function ArrowRight(
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
    createElement(Path, {"d":"M12 20L20 12L12 4","key":"0"}),
    createElement(Path, {"d":"M20 12L4 12","key":"1"})
  );
});

ArrowRight.displayName = 'ArrowRight';

module.exports = ArrowRight;
module.exports.ArrowRight = ArrowRight;
module.exports.default = ArrowRight;
