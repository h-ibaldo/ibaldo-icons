'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Rect } = RNSvg;

const ToggleOn = forwardRef(function ToggleOn(
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
    createElement(Rect, {"x":"1.999999988019908","y":"5.999996563894001","width":"20","height":"12.000000004577942","rx":"5.999993987784006","ry":"5.999993987784006","transform":"translate(23.999999973447217 23.999993134958544) rotate(-180)","key":"0"}),
    createElement(Path, {"d":"M15.999999977100742,17.999996563434252c-3.313708498801134,0-6-2.686291501198866-6-6,0-3.313708498797496,2.686291501198866-6,6-6","key":"1"})
  );
});

ToggleOn.displayName = 'ToggleOn';

module.exports = ToggleOn;
module.exports.ToggleOn = ToggleOn;
module.exports.default = ToggleOn;
