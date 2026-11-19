'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkBrokenBurstSquare = forwardRef(function LinkBrokenBurstSquare(
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
    createElement(Path, {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement(Path, {"d":"M15 12L16.5 10.5C17.328 9.672 17.328 8.328 16.5 7.5C15.672 6.672 14.328 6.672 13.5 7.5L12 9","key":"1"}),
    createElement(Path, {"d":"M9 12L7.5 13.5C6.672 14.328 6.672 15.672 7.5 16.5C8.328 17.328 9.672 17.328 10.5 16.5L12 15","key":"2"}),
    createElement(Path, {"d":"M10 6L10 7","key":"3"}),
    createElement(Path, {"d":"M6 10L7 10","key":"4"}),
    createElement(Path, {"d":"M6.293 6.293L7 7","key":"5"}),
    createElement(Path, {"d":"M14 18L14 17","key":"6"}),
    createElement(Path, {"d":"M18 14L17 14","key":"7"}),
    createElement(Path, {"d":"M17.707 17.707L17 17","key":"8"})
  );
});

LinkBrokenBurstSquare.displayName = 'LinkBrokenBurstSquare';

module.exports = LinkBrokenBurstSquare;
module.exports.LinkBrokenBurstSquare = LinkBrokenBurstSquare;
module.exports.default = LinkBrokenBurstSquare;
