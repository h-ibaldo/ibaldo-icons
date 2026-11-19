'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GaugeDropDashed = forwardRef(function GaugeDropDashed(
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
    createElement(Path, {"d":"M7.207 20.777C8.633 21.555 10.266 22 12 22C13.945 22 15.758 21.434 17.293 20.473","key":"0"}),
    createElement(Path, {"d":"M2.031 12.617C2.148 14.535 2.801 16.309 3.852 17.781","key":"1"}),
    createElement(Path, {"d":"M20.473 17.293C21.438 15.758 22 13.945 22 12C22 7.254 18.688 3.285 14.25 2.266","key":"2"}),
    createElement(Path, {"d":"M9.75 2.266C9.176 2.395 8.617 2.57 8.086 2.797","key":"3"}),
    createElement(Path, {"d":"M4.457 5.449C3.754 6.258 3.176 7.176 2.762 8.18","key":"4"}),
    createElement(Path, {"d":"M12 6L9.598 11.609C9.227 12.469 9.348 13.461 9.906 14.211C10.953 15.605 13.047 15.605 14.094 14.211C14.652 13.461 14.773 12.469 14.402 11.609Z","key":"5"})
  );
});

GaugeDropDashed.displayName = 'GaugeDropDashed';

module.exports = GaugeDropDashed;
module.exports.GaugeDropDashed = GaugeDropDashed;
module.exports.default = GaugeDropDashed;
