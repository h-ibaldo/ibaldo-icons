'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GaugeArcOpen = forwardRef(function GaugeArcOpen(
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
    createElement(Path, {"d":"M19 5L13.414 10.586","key":"1"}),
    createElement(Path, {"d":"M10.586 13.414L9 15","key":"2"}),
    createElement(Path, {"d":"M15 2.461C14.055 2.16 13.047 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 10.953 21.84 9.945 21.539 9","key":"3"}),
    createElement(Path, {"d":"M13 6.09C12.676 6.035 12.344 6 12 6C8.688 6 6 8.688 6 12","key":"4"})
  );
});

GaugeArcOpen.displayName = 'GaugeArcOpen';

module.exports = GaugeArcOpen;
module.exports.GaugeArcOpen = GaugeArcOpen;
module.exports.default = GaugeArcOpen;
