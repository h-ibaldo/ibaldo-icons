'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SatelliteDish = forwardRef(function SatelliteDish(
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
    createElement(Path, {"d":"M6 10.223C6 8.121 6.957 6.242 8.457 5L18 14.543C16.758 16.043 14.879 17 12.777 17C9.035 17 6 13.965 6 10.223Z","key":"0"}),
    createElement(Path, {"d":"M12 9L13 8C13.551 7.449 14.449 7.449 15 8C15.551 8.551 15.551 9.449 15 10L14 11","key":"1"}),
    createElement(Path, {"d":"M14 4.754C16.504 4.754 18.535 6.785 18.535 9.289","key":"2"}),
    createElement(Path, {"d":"M14.074 2C18.059 2 21.289 5.23 21.289 9.219","key":"3"}),
    createElement(Path, {"d":"M10.074 16.438L13 22L3 22L7.988 15.016","key":"4"})
  );
});

SatelliteDish.displayName = 'SatelliteDish';

module.exports = SatelliteDish;
module.exports.SatelliteDish = SatelliteDish;
module.exports.default = SatelliteDish;
