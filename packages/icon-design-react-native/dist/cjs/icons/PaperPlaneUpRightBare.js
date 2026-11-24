'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PaperPlaneUpRightBare = forwardRef(function PaperPlaneUpRightBare(
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
    createElement(Path, {"d":"M3.762 10.566L10.105 13.387C10.332 13.484 10.512 13.668 10.613 13.895L13.434 20.238C13.801 21.063 14.992 21.016 15.293 20.16L20.773 4.5C21.051 3.711 20.289 2.949 19.496 3.227L3.84 8.707C2.984 9.008 2.934 10.199 3.762 10.566Z","key":"0"})
  );
});

PaperPlaneUpRightBare.displayName = 'PaperPlaneUpRightBare';

module.exports = PaperPlaneUpRightBare;
module.exports.PaperPlaneUpRightBare = PaperPlaneUpRightBare;
module.exports.default = PaperPlaneUpRightBare;
