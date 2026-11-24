'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BagRound = forwardRef(function BagRound(
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
    createElement(Path, {"d":"M3.160238702228526,7.839765294598692h17.679522595542949c.640353171759344,0,1.160238702228526.519885530469182,1.160238702228526,1.160238702228526v8c0,2.75957512247-2.24042487753,5-5,5H7c-2.75957512247,0-5-2.24042487753-5-5v-8c0-.640353171759344.519885530469182-1.160238702228526,1.160238702228526-1.160238702228526Z","key":"0"}),
    createElement(Path, {"d":"M16,11.000003996827218v-5.000003999997716c0-2.209136790192133-1.790859209819246-3.999996000002284-3.999996000000465-3.999996000002284h-.00000799999907c-2.209136790190314,0-3.999996000000465,1.790859209810151-3.999996000000465,3.999996000002284v5.000003999997716","key":"1"})
  );
});

BagRound.displayName = 'BagRound';

module.exports = BagRound;
module.exports.BagRound = BagRound;
module.exports.default = BagRound;
