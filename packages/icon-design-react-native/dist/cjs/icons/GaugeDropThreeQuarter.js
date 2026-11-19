'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GaugeDropThreeQuarter = forwardRef(function GaugeDropThreeQuarter(
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
    createElement(Path, {"d":"M22 13L19 13","key":"0"}),
    createElement(Path, {"d":"M5 13L2 13","key":"1"}),
    createElement(Path, {"d":"M19 6L17 8","key":"2"}),
    createElement(Path, {"d":"M7 18L5 20","key":"3"}),
    createElement(Path, {"d":"M7 8L5 6","key":"4"}),
    createElement(Path, {"d":"M22 13C22 7.477 17.523 3 12 3C6.477 3 2 7.477 2 13C2 15.777 3.137 18.293 4.965 20.105L5 20","key":"5"}),
    createElement(Path, {"d":"M12 7L9.598 12.609C9.227 13.469 9.348 14.461 9.906 15.211C10.953 16.605 13.047 16.605 14.094 15.211C14.652 14.461 14.773 13.469 14.402 12.609Z","key":"6"})
  );
});

GaugeDropThreeQuarter.displayName = 'GaugeDropThreeQuarter';

module.exports = GaugeDropThreeQuarter;
module.exports.GaugeDropThreeQuarter = GaugeDropThreeQuarter;
module.exports.default = GaugeDropThreeQuarter;
