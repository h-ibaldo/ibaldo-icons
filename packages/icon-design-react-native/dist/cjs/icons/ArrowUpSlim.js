'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpSlim = forwardRef(function ArrowUpSlim(
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
    createElement(Path, {"d":"M9 7L12 4L15 7","key":"0"}),
    createElement(Path, {"d":"M12 4L12 20","key":"1"})
  );
});

ArrowUpSlim.displayName = 'ArrowUpSlim';

module.exports = ArrowUpSlim;
module.exports.ArrowUpSlim = ArrowUpSlim;
module.exports.default = ArrowUpSlim;
