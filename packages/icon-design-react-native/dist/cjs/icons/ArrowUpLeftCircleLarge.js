'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpLeftCircleLarge = forwardRef(function ArrowUpLeftCircleLarge(
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
    createElement(Path, {"d":"M8 15L8 8L15 8","key":"0"}),
    createElement(Path, {"d":"M19.07 4.93C22.977 8.832 22.977 15.164 19.07 19.07C15.168 22.977 8.836 22.977 4.93 19.07C1.023 15.164 1.023 8.832 4.93 4.93C8.836 1.023 15.168 1.023 19.07 4.93Z","key":"1"}),
    createElement(Path, {"d":"M15 15L8 8","key":"2"})
  );
});

ArrowUpLeftCircleLarge.displayName = 'ArrowUpLeftCircleLarge';

module.exports = ArrowUpLeftCircleLarge;
module.exports.ArrowUpLeftCircleLarge = ArrowUpLeftCircleLarge;
module.exports.default = ArrowUpLeftCircleLarge;
