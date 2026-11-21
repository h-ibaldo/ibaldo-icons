'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Approximate = forwardRef(function Approximate(
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
    createElement(Path, {"d":"M5 9L5.605 8.547C7.555 7.086 10.277 7.277 12 9C13.723 10.723 16.445 10.914 18.395 9.453L19 9","key":"0"}),
    createElement(Path, {"d":"M5 15.434L5.605 14.977C7.555 13.52 10.277 13.711 12 15.434C13.723 17.152 16.445 17.348 18.395 15.887L19 15.434","key":"1"})
  );
});

Approximate.displayName = 'Approximate';

module.exports = Approximate;
module.exports.Approximate = Approximate;
module.exports.default = Approximate;
