'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const RocketBare = forwardRef(function RocketBare(
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
    createElement(Path, {"d":"M2 20.461L2 22L3.539 22C4.969 22 6.203 20.992 6.48 19.59L7 17L4.41 17.52C3.008 17.797 2 19.031 2 20.461Z","key":"0"}),
    createElement(Path, {"d":"M12 18L16.074 14.48C19.254 11.59 21.293 7.656 21.824 3.395L22 2L20.605 2.176C16.344 2.707 12.41 4.746 9.52 7.926L6 12Z","key":"1"}),
    createElement(Path, {"d":"M12 6L18 12","key":"2"}),
    createElement(Path, {"d":"M17 14L18 18L13 22L12 18","key":"3"}),
    createElement(Path, {"d":"M10 7L6 6L2 11L6 12","key":"4"})
  );
});

RocketBare.displayName = 'RocketBare';

module.exports = RocketBare;
module.exports.RocketBare = RocketBare;
module.exports.default = RocketBare;
