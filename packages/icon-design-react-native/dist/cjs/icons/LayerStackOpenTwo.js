'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LayerStackOpenTwo = forwardRef(function LayerStackOpenTwo(
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
    createElement(Path, {"d":"M12 2L2 8L12 14L22 8Z","key":"0"}),
    createElement(Path, {"d":"M18.668 14L22 16L12 22L2 16L5.332 14","key":"1"})
  );
});

LayerStackOpenTwo.displayName = 'LayerStackOpenTwo';

module.exports = LayerStackOpenTwo;
module.exports.LayerStackOpenTwo = LayerStackOpenTwo;
module.exports.default = LayerStackOpenTwo;
