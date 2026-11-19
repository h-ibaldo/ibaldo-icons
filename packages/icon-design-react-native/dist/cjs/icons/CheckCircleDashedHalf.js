'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CheckCircleDashedHalf = forwardRef(function CheckCircleDashedHalf(
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
    createElement(Path, {"d":"M3.66 17.512C4.402 18.633 5.363 19.598 6.488 20.34","key":"0"}),
    createElement(Path, {"d":"M2.203 10C2.07 10.645 2 11.316 2 12C2 12.684 2.07 13.355 2.203 14","key":"1"}),
    createElement(Path, {"d":"M6.488 3.66C5.367 4.402 4.402 5.367 3.66 6.488","key":"2"}),
    createElement(Path, {"d":"M10 21.801C10.645 21.93 11.316 22 12 22C12.344 22 12.68 21.98 13.016 21.949C18.063 21.441 22 17.18 22 12C22 6.82 18.063 2.559 13.016 2.051C12.68 2.016 12.344 2 12 2C11.316 2 10.645 2.07 10 2.199","key":"3"}),
    createElement(Path, {"d":"M8 12L11 15L16 9","key":"4"})
  );
});

CheckCircleDashedHalf.displayName = 'CheckCircleDashedHalf';

module.exports = CheckCircleDashedHalf;
module.exports.CheckCircleDashedHalf = CheckCircleDashedHalf;
module.exports.default = CheckCircleDashedHalf;
