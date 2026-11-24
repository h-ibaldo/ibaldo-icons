'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CheckCircleDashedQuarter = forwardRef(function CheckCircleDashedQuarter(
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
    createElement(Path, {"d":"M7.207 20.777C8.633 21.555 10.266 22 12 22C13.945 22 15.758 21.434 17.293 20.473","key":"0"}),
    createElement(Path, {"d":"M2.031 12.621C2.148 14.535 2.801 16.305 3.852 17.781","key":"1"}),
    createElement(Path, {"d":"M20.473 17.293C21.438 15.758 22 13.945 22 12C22 7.254 18.688 3.285 14.25 2.266","key":"2"}),
    createElement(Path, {"d":"M9.75 2.266C9.176 2.395 8.617 2.57 8.09 2.797","key":"3"}),
    createElement(Path, {"d":"M4.457 5.449C3.754 6.258 3.176 7.176 2.762 8.18","key":"4"}),
    createElement(Path, {"d":"M8 12L11 15L16 9","key":"5"})
  );
});

CheckCircleDashedQuarter.displayName = 'CheckCircleDashedQuarter';

module.exports = CheckCircleDashedQuarter;
module.exports.CheckCircleDashedQuarter = CheckCircleDashedQuarter;
module.exports.default = CheckCircleDashedQuarter;
