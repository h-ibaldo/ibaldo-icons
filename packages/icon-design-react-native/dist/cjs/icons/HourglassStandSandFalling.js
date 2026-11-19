'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const HourglassStandSandFalling = forwardRef(function HourglassStandSandFalling(
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
    createElement(Path, {"d":"M10 19L14 19","key":"0"}),
    createElement(Path, {"d":"M12 8L12 8","key":"1"}),
    createElement(Path, {"d":"M4 2L20 2","key":"2"}),
    createElement(Path, {"d":"M6 3L6 5.324C6 6.996 6.836 8.559 8.227 9.484L12 12L15.773 9.484C17.164 8.559 18 6.996 18 5.324L18 3","key":"3"}),
    createElement(Path, {"d":"M20 22L4 22","key":"4"}),
    createElement(Path, {"d":"M18 21L18 18.676C18 17.004 17.164 15.441 15.773 14.516L12 12L8.227 14.516C6.836 15.441 6 17.004 6 18.676L6 21","key":"5"})
  );
});

HourglassStandSandFalling.displayName = 'HourglassStandSandFalling';

module.exports = HourglassStandSandFalling;
module.exports.HourglassStandSandFalling = HourglassStandSandFalling;
module.exports.default = HourglassStandSandFalling;
