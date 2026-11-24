'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const RssHigh = forwardRef(function RssHigh(
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
    createElement(Path, {"d":"M2 20C2 18.895 2.895 18 4 18C5.105 18 6 18.895 6 20C6 21.105 5.105 22 4 22C2.895 22 2 21.105 2 20Z","key":"0"}),
    createElement(Path, {"d":"M3 12C7.969 12 12 16.031 12 21","key":"1"}),
    createElement(Path, {"d":"M3 7C10.73 7 17 13.27 17 21","key":"2"}),
    createElement(Path, {"d":"M3 2C13.492 2 22 10.508 22 21","key":"3"})
  );
});

RssHigh.displayName = 'RssHigh';

module.exports = RssHigh;
module.exports.RssHigh = RssHigh;
module.exports.default = RssHigh;
