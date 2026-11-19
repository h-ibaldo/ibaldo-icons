'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BorderLeft = forwardRef(function BorderLeft(
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
    createElement(Path, {"d":"M22 2L22 2","key":"0"}),
    createElement(Path, {"d":"M17 2L17 2","key":"1"}),
    createElement(Path, {"d":"M12 2L12 2","key":"2"}),
    createElement(Path, {"d":"M7 2L7 2","key":"3"}),
    createElement(Path, {"d":"M2 22L2 2","key":"4"}),
    createElement(Path, {"d":"M22 22L22 22","key":"5"}),
    createElement(Path, {"d":"M22 17L22 17","key":"6"}),
    createElement(Path, {"d":"M22 12L22 12","key":"7"}),
    createElement(Path, {"d":"M22 7L22 7","key":"8"}),
    createElement(Path, {"d":"M12 17L12 17","key":"9"}),
    createElement(Path, {"d":"M12 12L12 12","key":"10"}),
    createElement(Path, {"d":"M12 7L12 7","key":"11"}),
    createElement(Path, {"d":"M17 22L17 22","key":"12"}),
    createElement(Path, {"d":"M12 22L12 22","key":"13"}),
    createElement(Path, {"d":"M7 22L7 22","key":"14"}),
    createElement(Path, {"d":"M17 12L17 12","key":"15"}),
    createElement(Path, {"d":"M7 12L7 12","key":"16"})
  );
});

BorderLeft.displayName = 'BorderLeft';

module.exports = BorderLeft;
module.exports.BorderLeft = BorderLeft;
module.exports.default = BorderLeft;
