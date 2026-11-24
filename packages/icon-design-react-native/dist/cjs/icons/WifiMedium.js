'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const WifiMedium = forwardRef(function WifiMedium(
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
    createElement(Path, {"d":"M5.59 11.852C9.492 9.383 14.508 9.383 18.41 11.852","key":"0"}),
    createElement(Path, {"d":"M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926","key":"1"}),
    createElement(Path, {"d":"M12 20L12 20","key":"2"})
  );
});

WifiMedium.displayName = 'WifiMedium';

module.exports = WifiMedium;
module.exports.WifiMedium = WifiMedium;
module.exports.default = WifiMedium;
