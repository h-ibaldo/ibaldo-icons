'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BuildingSlanted = forwardRef(function BuildingSlanted(
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
    createElement(Path, {"d":"M20 6L4 2L4 22L20 22Z","key":"0"}),
    createElement(Path, {"d":"M8 9L8 18","key":"1"}),
    createElement(Path, {"d":"M12 9L12 14","key":"2"}),
    createElement(Path, {"d":"M12 18L12 22","key":"3"}),
    createElement(Path, {"d":"M16 9L16 18","key":"4"})
  );
});

BuildingSlanted.displayName = 'BuildingSlanted';

module.exports = BuildingSlanted;
module.exports.BuildingSlanted = BuildingSlanted;
module.exports.default = BuildingSlanted;
