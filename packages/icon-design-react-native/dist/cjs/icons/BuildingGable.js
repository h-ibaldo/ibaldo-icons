'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BuildingGable = forwardRef(function BuildingGable(
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
    createElement(Path, {"d":"M3 6L3 22L15 22L15 6","key":"0"}),
    createElement(Path, {"d":"M22 6L2 6","key":"1"}),
    createElement(Path, {"d":"M7 10L7 10","key":"2"}),
    createElement(Path, {"d":"M11 10L11 10","key":"3"}),
    createElement(Path, {"d":"M7 14L7 14","key":"4"}),
    createElement(Path, {"d":"M11 14L11 14","key":"5"}),
    createElement(Path, {"d":"M7 18L7 18","key":"6"}),
    createElement(Path, {"d":"M11 22L11 18","key":"7"}),
    createElement(Path, {"d":"M15 22L21 22L21 6","key":"8"}),
    createElement(Path, {"d":"M18 14L18 14","key":"9"}),
    createElement(Path, {"d":"M18 10L18 10","key":"10"}),
    createElement(Path, {"d":"M18 18L18 18","key":"11"}),
    createElement(Path, {"d":"M18 2L6 2","key":"12"}),
    createElement(Path, {"d":"M3 6L6 2","key":"13"}),
    createElement(Path, {"d":"M18 2L21 6","key":"14"}),
    createElement(Path, {"d":"M12 2L15 6","key":"15"})
  );
});

BuildingGable.displayName = 'BuildingGable';

module.exports = BuildingGable;
module.exports.BuildingGable = BuildingGable;
module.exports.default = BuildingGable;
