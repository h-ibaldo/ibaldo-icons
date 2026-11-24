'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ComputerTower = forwardRef(function ComputerTower(
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
    createElement(Path, {"d":"M6 2L18 2L18 22L6 22Z","key":"0"}),
    createElement(Path, {"d":"M9 6L15 6","key":"1"}),
    createElement(Path, {"d":"M9 9L15 9","key":"2"}),
    createElement(Path, {"d":"M9 12L15 12","key":"3"}),
    createElement(Path, {"d":"M12 17L12 18","key":"4"})
  );
});

ComputerTower.displayName = 'ComputerTower';

module.exports = ComputerTower;
module.exports.ComputerTower = ComputerTower;
module.exports.default = ComputerTower;
