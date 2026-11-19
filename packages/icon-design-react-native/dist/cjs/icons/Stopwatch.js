'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Stopwatch = forwardRef(function Stopwatch(
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
    createElement(Path, {"d":"M12 10L12 14","key":"0"}),
    createElement(Path, {"d":"M20 14C20 18.418 16.418 22 12 22C7.582 22 4 18.418 4 14C4 9.582 7.582 6 12 6C16.418 6 20 9.582 20 14Z","key":"1"}),
    createElement(Path, {"d":"M5 5L3 7","key":"2"}),
    createElement(Path, {"d":"M19 5L21 7","key":"3"}),
    createElement(Path, {"d":"M10 3L14 3","key":"4"}),
    createElement(Path, {"d":"M12 3L12 6","key":"5"})
  );
});

Stopwatch.displayName = 'Stopwatch';

module.exports = Stopwatch;
module.exports.Stopwatch = Stopwatch;
module.exports.default = Stopwatch;
