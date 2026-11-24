'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Rect } = RNSvg;

const ToggleOnInset = forwardRef(function ToggleOnInset(
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
    createElement(Rect, {"x":"2.000000211418751","y":"4.999996761721775","width":"20.000000000036607","height":"14.000000015773026","rx":"6.999992973722963","ry":"6.999992973722963","transform":"translate(24.000000402665158 23.999993559425533) rotate(-180)","key":"0"}),
    createElement(Circle, {"cx":"15.000000396670202","cy":"11.999996978796844","r":"3.000000000000227","key":"1"})
  );
});

ToggleOnInset.displayName = 'ToggleOnInset';

module.exports = ToggleOnInset;
module.exports.ToggleOnInset = ToggleOnInset;
module.exports.default = ToggleOnInset;
