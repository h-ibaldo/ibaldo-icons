'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Wifi = forwardRef(function Wifi(
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
    createElement(Path, {"d":"M2.387 7.777C8.238 4.074 15.762 4.074 21.613 7.777","key":"0"}),
    createElement(Path, {"d":"M5.59 11.852C9.492 9.383 14.508 9.383 18.41 11.852","key":"1"}),
    createElement(Path, {"d":"M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926","key":"2"}),
    createElement(Path, {"d":"M12 20L12 20","key":"3"})
  );
});

Wifi.displayName = 'Wifi';

module.exports = Wifi;
module.exports.Wifi = Wifi;
module.exports.default = Wifi;
