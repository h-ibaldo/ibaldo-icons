'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FlameTriangle = forwardRef(function FlameTriangle(
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
    createElement(Path, {"d":"M10.719 4.094L2.395 17.719C1.785 18.719 2.504 20 3.676 20L20.324 20C21.496 20 22.215 18.719 21.605 17.719L13.281 4.094C12.695 3.137 11.305 3.137 10.719 4.094Z","key":"0"}),
    createElement(Path, {"d":"M10.918 13.246C10.918 11.906 11.098 10.051 12.391 8.418C12.391 10.73 15 11.703 15 14C15 15.656 13.656 17 12 17C10.344 17 9 15.656 9 14C9 12.406 10 11 10 11C10 11 10.031 12.363 10.918 13.246Z","key":"1"})
  );
});

FlameTriangle.displayName = 'FlameTriangle';

module.exports = FlameTriangle;
module.exports.FlameTriangle = FlameTriangle;
module.exports.default = FlameTriangle;
