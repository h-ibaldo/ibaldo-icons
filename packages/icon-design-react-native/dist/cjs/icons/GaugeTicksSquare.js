'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GaugeTicksSquare = forwardRef(function GaugeTicksSquare(
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
    createElement(Path, {"d":"M10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12Z","key":"0"}),
    createElement(Path, {"d":"M18 6L13.414 10.586","key":"1"}),
    createElement(Path, {"d":"M10.586 13.414L9 15","key":"2"}),
    createElement(Path, {"d":"M18 22L6 22C3.789 22 2 20.211 2 18L2 6C2 3.789 3.789 2 6 2L18 2C20.211 2 22 3.789 22 6L22 18C22 20.211 20.211 22 18 22Z","key":"3"}),
    createElement(Path, {"d":"M12 2L12 4","key":"4"}),
    createElement(Path, {"d":"M12 20L12 22","key":"5"}),
    createElement(Path, {"d":"M22 12L20 12","key":"6"}),
    createElement(Path, {"d":"M4 12L2 12","key":"7"})
  );
});

GaugeTicksSquare.displayName = 'GaugeTicksSquare';

module.exports = GaugeTicksSquare;
module.exports.GaugeTicksSquare = GaugeTicksSquare;
module.exports.default = GaugeTicksSquare;
