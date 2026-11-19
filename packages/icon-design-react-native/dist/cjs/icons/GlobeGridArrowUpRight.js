'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GlobeGridArrowUpRight = forwardRef(function GlobeGridArrowUpRight(
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
    createElement(Path, {"d":"M2 22L5 19","key":"0"}),
    createElement(Path, {"d":"M2 19L6 18L5 22","key":"1"}),
    createElement(Path, {"d":"M8 12C8 16.093 9.575 19.715 12 22C14.425 19.715 16 16.093 16 12C16 7.907 14.425 4.285 12 2C9.575 4.285 8 7.907 8 12Z","key":"2"}),
    createElement(Path, {"d":"M2.459 9L21.541 9","key":"3"}),
    createElement(Path, {"d":"M21.541 15L2.459 15","key":"4"}),
    createElement(Path, {"d":"M9 21.541C9.947 21.838 10.955 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.045 2.162 14.053 2.459 15","key":"5"})
  );
});

GlobeGridArrowUpRight.displayName = 'GlobeGridArrowUpRight';

module.exports = GlobeGridArrowUpRight;
module.exports.GlobeGridArrowUpRight = GlobeGridArrowUpRight;
module.exports.default = GlobeGridArrowUpRight;
