'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ClockDashed = forwardRef(function ClockDashed(
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
    createElement(Path, {"d":"M3.66 17.512C4.402 18.633 5.367 19.598 6.488 20.34","key":"0"}),
    createElement(Path, {"d":"M2.199 10C2.07 10.645 2 11.316 2 12C2 12.684 2.07 13.355 2.199 14","key":"1"}),
    createElement(Path, {"d":"M6.488 3.66C5.367 4.402 4.402 5.367 3.66 6.488","key":"2"}),
    createElement(Path, {"d":"M20.34 17.512C19.598 18.633 18.633 19.598 17.512 20.34","key":"3"}),
    createElement(Path, {"d":"M21.801 10C21.93 10.645 22 11.316 22 12C22 12.684 21.93 13.355 21.801 14","key":"4"}),
    createElement(Path, {"d":"M14 2.199C13.355 2.07 12.684 2 12 2C11.316 2 10.645 2.07 10 2.199","key":"5"}),
    createElement(Path, {"d":"M14 21.797C13.355 21.93 12.684 22 12 22C11.316 22 10.645 21.93 10 21.797","key":"6"}),
    createElement(Path, {"d":"M17.512 3.66C18.633 4.402 19.598 5.367 20.34 6.488","key":"7"}),
    createElement(Path, {"d":"M12 7L12 12L17 14","key":"8"})
  );
});

ClockDashed.displayName = 'ClockDashed';

module.exports = ClockDashed;
module.exports.ClockDashed = ClockDashed;
module.exports.default = ClockDashed;
