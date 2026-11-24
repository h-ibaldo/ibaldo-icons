'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const HeartXAngular = forwardRef(function HeartXAngular(
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
    createElement(Path, {"d":"M16 20L20 16M16 16L20 20","key":"0"}),
    createElement(Path, {"d":"M20.859 11.949C22.348 10.008 22.227 7.227 20.449 5.449C18.516 3.516 15.383 3.516 13.449 5.449L11.949 6.949L10.449 5.449C8.516 3.516 5.383 3.516 3.449 5.449C1.516 7.383 1.516 10.516 3.449 12.449L11.949 20.949","key":"1"})
  );
});

HeartXAngular.displayName = 'HeartXAngular';

module.exports = HeartXAngular;
module.exports.HeartXAngular = HeartXAngular;
module.exports.default = HeartXAngular;
