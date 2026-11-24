'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Rect } = RNSvg;

const Bag = forwardRef(function Bag(
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
    createElement(Rect, {"x":"2.999999981009751","y":"7.953620571095598","width":"18","height":"14","rx":"1.100699078559046","ry":"1.100699078559046","key":"0"}),
    createElement(Path, {"d":"M15.999999981009751,11.953620571095598v-6c0-2.209136790177581-1.790859209819246-3.999995999998646-3.999996000000465-3.999995999998646h-.00000799999907c-2.209136790190314,0-3.999996000000465,1.790859209821065-3.999996000000465,3.999995999998646v6","key":"1"})
  );
});

Bag.displayName = 'Bag';

module.exports = Bag;
module.exports.Bag = Bag;
module.exports.default = Bag;
