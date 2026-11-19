'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Building = forwardRef(function Building(
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
    createElement(Path, {"d":"M20 3L15 3L15 2L9 2L9 3L4 3","key":"0"}),
    createElement(Path, {"d":"M5 3L5 22L19 22L19 3","key":"1"}),
    createElement(Path, {"d":"M10 8L9 8L9 7L10 7Z","key":"2"}),
    createElement(Path, {"d":"M15 8L14 8L14 7L15 7Z","key":"3"}),
    createElement(Path, {"d":"M10 13L9 13L9 12L10 12Z","key":"4"}),
    createElement(Path, {"d":"M15 13L14 13L14 12L15 12Z","key":"5"}),
    createElement(Path, {"d":"M10 18L9 18L9 17L10 17Z","key":"6"}),
    createElement(Path, {"d":"M15 18L14 18L14 17L15 17Z","key":"7"})
  );
});

Building.displayName = 'Building';

module.exports = Building;
module.exports.Building = Building;
module.exports.default = Building;
