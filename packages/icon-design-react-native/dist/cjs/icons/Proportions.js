'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Proportions = forwardRef(function Proportions(
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
    createElement(Path, {"d":"M4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2Z","key":"0"}),
    createElement(Path, {"d":"M2 6L16 6C17.105 6 18 6.895 18 8L18 22","key":"1"}),
    createElement(Path, {"d":"M12 6L12 22","key":"2"})
  );
});

Proportions.displayName = 'Proportions';

module.exports = Proportions;
module.exports.Proportions = Proportions;
module.exports.default = Proportions;
