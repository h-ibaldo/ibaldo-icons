'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BuildingAnnexDoor = forwardRef(function BuildingAnnexDoor(
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
    createElement(Path, {"d":"M16 6L2 6","key":"1"}),
    createElement(Path, {"d":"M7 10L7 10","key":"2"}),
    createElement(Path, {"d":"M11 10L11 10","key":"3"}),
    createElement(Path, {"d":"M7 14L7 14","key":"4"}),
    createElement(Path, {"d":"M11 14L11 14","key":"5"}),
    createElement(Path, {"d":"M7 18L7 18","key":"6"}),
    createElement(Path, {"d":"M11 22L11 18","key":"7"}),
    createElement(Path, {"d":"M15 22L21 22L21 10","key":"8"}),
    createElement(Path, {"d":"M18 14L18 14","key":"9"}),
    createElement(Path, {"d":"M18 18L18 18","key":"10"}),
    createElement(Path, {"d":"M4 2L14 2","key":"11"}),
    createElement(Path, {"d":"M15 10L22 10","key":"12"})
  );
});

BuildingAnnexDoor.displayName = 'BuildingAnnexDoor';

module.exports = BuildingAnnexDoor;
module.exports.BuildingAnnexDoor = BuildingAnnexDoor;
module.exports.default = BuildingAnnexDoor;
