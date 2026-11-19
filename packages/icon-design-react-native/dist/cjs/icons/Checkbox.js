'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Rect } = RNSvg;

const Checkbox = forwardRef(function Checkbox(
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
    createElement(Rect, {"x":"1.949462885140747","y":"2.000000000480213","width":"20","height":"20","rx":"3","ry":"3","key":"0"})
  );
});

Checkbox.displayName = 'Checkbox';

module.exports = Checkbox;
module.exports.Checkbox = Checkbox;
module.exports.default = Checkbox;
