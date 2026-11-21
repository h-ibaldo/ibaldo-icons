'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PaperPlaneBare = forwardRef(function PaperPlaneBare(
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
    createElement(Path, {"d":"M20.207 11.086L4.617 4.074C3.781 3.699 2.922 4.555 3.297 5.395L6.051 11.594C6.164 11.852 6.164 12.148 6.051 12.406L3.297 18.609C2.922 19.445 3.781 20.305 4.617 19.926L20.207 12.91C20.992 12.559 20.992 11.441 20.207 11.086Z","key":"0"})
  );
});

PaperPlaneBare.displayName = 'PaperPlaneBare';

module.exports = PaperPlaneBare;
module.exports.PaperPlaneBare = PaperPlaneBare;
module.exports.default = PaperPlaneBare;
