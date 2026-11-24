'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SkipForwardThick = forwardRef(function SkipForwardThick(
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
    createElement(Path, {"d":"M2 3.75L2 20.25C2 21.141 3.039 21.625 3.723 21.059L13.621 12.805C14.125 12.387 14.125 11.613 13.621 11.195L3.723 2.941C3.039 2.375 2 2.859 2 3.75Z","key":"0"}),
    createElement(Path, {"d":"M19 21L21 21C21.551 21 22 20.551 22 20L22 4C22 3.449 21.551 3 21 3L19 3C18.449 3 18 3.449 18 4L18 20C18 20.551 18.449 21 19 21Z","key":"1"})
  );
});

SkipForwardThick.displayName = 'SkipForwardThick';

module.exports = SkipForwardThick;
module.exports.SkipForwardThick = SkipForwardThick;
module.exports.default = SkipForwardThick;
