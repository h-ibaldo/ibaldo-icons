'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowConvergeFourLarge = forwardRef(function ArrowConvergeFourLarge(
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
    createElement(Path, {"d":"M15 4L12 7L9 4","key":"0"}),
    createElement(Path, {"d":"M12 2L12 7","key":"1"}),
    createElement(Path, {"d":"M9 20L12 17L15 20","key":"2"}),
    createElement(Path, {"d":"M12 22L12 17","key":"3"}),
    createElement(Path, {"d":"M4 9L7 12L4 15","key":"4"}),
    createElement(Path, {"d":"M2 12L7 12","key":"5"}),
    createElement(Path, {"d":"M20 15L17 12L20 9","key":"6"}),
    createElement(Path, {"d":"M22 12L17 12","key":"7"}),
    createElement(Path, {"d":"M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z","key":"8"})
  );
});

ArrowConvergeFourLarge.displayName = 'ArrowConvergeFourLarge';

module.exports = ArrowConvergeFourLarge;
module.exports.ArrowConvergeFourLarge = ArrowConvergeFourLarge;
module.exports.default = ArrowConvergeFourLarge;
