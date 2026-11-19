'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BuildingIsometric = forwardRef(function BuildingIsometric(
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
    createElement(Path, {"d":"M3 6L12 10L21 6L12 2Z","key":"0"}),
    createElement(Path, {"d":"M3 6L3 18L12 22L21 18L21 6","key":"1"}),
    createElement(Path, {"d":"M18 11L18 11","key":"2"}),
    createElement(Path, {"d":"M18 15L18 15","key":"3"}),
    createElement(Path, {"d":"M15 13L15 13","key":"4"}),
    createElement(Path, {"d":"M12 22L12 10","key":"5"}),
    createElement(Path, {"d":"M15 17L15 17","key":"6"}),
    createElement(Path, {"d":"M6 11L6 11","key":"7"}),
    createElement(Path, {"d":"M6 15L6 15","key":"8"}),
    createElement(Path, {"d":"M9 13L9 13","key":"9"}),
    createElement(Path, {"d":"M9 17L9 17","key":"10"})
  );
});

BuildingIsometric.displayName = 'BuildingIsometric';

module.exports = BuildingIsometric;
module.exports.BuildingIsometric = BuildingIsometric;
module.exports.default = BuildingIsometric;
