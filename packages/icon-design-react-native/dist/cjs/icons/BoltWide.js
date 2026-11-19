'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polygon } = RNSvg;

const BoltWide = forwardRef(function BoltWide(
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
    createElement(Polygon, {"points":"18.999999976489562 9.998840335112618 13.999999976489562 9.998779299956368 17.999999976489562 1.998779299956368 8.999999976489562 1.998779299956368 4.999999976489562 11.998779299956368 9.333312964779907 11.998779299956368 5.999999976489562 21.998840335112618 18.999999976489562 9.998840335112618","key":"0"})
  );
});

BoltWide.displayName = 'BoltWide';

module.exports = BoltWide;
module.exports.BoltWide = BoltWide;
module.exports.default = BoltWide;
