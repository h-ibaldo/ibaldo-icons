'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GaugeTeardropTicksSquare = forwardRef(function GaugeTeardropTicksSquare(
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
    createElement(Path, {"d":"M18 22L6 22C3.789 22 2 20.211 2 18L2 6C2 3.789 3.789 2 6 2L18 2C20.211 2 22 3.789 22 6L22 18C22 20.211 20.211 22 18 22Z","key":"0"}),
    createElement(Path, {"d":"M16.242 7.758L10.574 10.023C9.707 10.371 9.09 11.156 8.957 12.082C8.711 13.809 10.191 15.289 11.918 15.043C12.844 14.91 13.629 14.293 13.977 13.422Z","key":"1"}),
    createElement(Path, {"d":"M12 2L12 4","key":"2"}),
    createElement(Path, {"d":"M12 20L12 22","key":"3"}),
    createElement(Path, {"d":"M22 12L20 12","key":"4"}),
    createElement(Path, {"d":"M4 12L2 12","key":"5"})
  );
});

GaugeTeardropTicksSquare.displayName = 'GaugeTeardropTicksSquare';

module.exports = GaugeTeardropTicksSquare;
module.exports.GaugeTeardropTicksSquare = GaugeTeardropTicksSquare;
module.exports.default = GaugeTeardropTicksSquare;
