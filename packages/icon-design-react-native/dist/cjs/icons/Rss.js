'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Rss = forwardRef(function Rss(
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
    createElement(Path, {"d":"M4 18C4 16.895 4.895 16 6 16C7.105 16 8 16.895 8 18C8 19.105 7.105 20 6 20C4.895 20 4 19.105 4 18Z","key":"0"}),
    createElement(Path, {"d":"M5 10C9.969 10 14 14.031 14 19","key":"1"}),
    createElement(Path, {"d":"M5 4C13.285 4 20 10.715 20 19","key":"2"})
  );
});

Rss.displayName = 'Rss';

module.exports = Rss;
module.exports.Rss = Rss;
module.exports.default = Rss;
