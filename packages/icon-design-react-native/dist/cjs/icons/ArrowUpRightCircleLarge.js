'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpRightCircleLarge = forwardRef(function ArrowUpRightCircleLarge(
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
    createElement(Path, {"d":"M19.07 19.07C22.977 15.168 22.977 8.836 19.07 4.93C15.168 1.023 8.836 1.023 4.93 4.93C1.023 8.836 1.023 15.168 4.93 19.07C8.836 22.977 15.168 22.977 19.07 19.07Z","key":"0"}),
    createElement(Path, {"d":"M16 15L16 8L9 8","key":"1"}),
    createElement(Path, {"d":"M9 15L16 8","key":"2"})
  );
});

ArrowUpRightCircleLarge.displayName = 'ArrowUpRightCircleLarge';

module.exports = ArrowUpRightCircleLarge;
module.exports.ArrowUpRightCircleLarge = ArrowUpRightCircleLarge;
module.exports.default = ArrowUpRightCircleLarge;
