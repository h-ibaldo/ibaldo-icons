'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Polyline, Rect } = RNSvg;

const BriefcaseFlap = forwardRef(function BriefcaseFlap(
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
    createElement(Rect, {"x":"2","y":"6.999999999998181","width":"20","height":"14","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M9,2.999999999998181h6c.551915024494001,0,1,.448084975506,1,1v3h-8v-3c0-.551915024494.448084975505999-1,1-1Z","key":"1"}),
    createElement(Polyline, {"points":"2 10.999999999998181 12 15.999999999998181 22 10.999999999998181","key":"2"})
  );
});

BriefcaseFlap.displayName = 'BriefcaseFlap';

module.exports = BriefcaseFlap;
module.exports.BriefcaseFlap = BriefcaseFlap;
module.exports.default = BriefcaseFlap;
