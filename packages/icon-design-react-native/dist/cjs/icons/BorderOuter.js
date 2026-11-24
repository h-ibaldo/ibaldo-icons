'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BorderOuter = forwardRef(function BorderOuter(
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
    createElement(Path, {"d":"M12 7L12 7","key":"0"}),
    createElement(Path, {"d":"M12 12L12 12","key":"1"}),
    createElement(Path, {"d":"M12 17L12 17","key":"2"}),
    createElement(Path, {"d":"M7 12L7 12","key":"3"}),
    createElement(Path, {"d":"M17 12L17 12","key":"4"}),
    createElement(Path, {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"5"})
  );
});

BorderOuter.displayName = 'BorderOuter';

module.exports = BorderOuter;
module.exports.BorderOuter = BorderOuter;
module.exports.default = BorderOuter;
