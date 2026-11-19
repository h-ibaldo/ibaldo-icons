'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TrashArrowUpBucket = forwardRef(function TrashArrowUpBucket(
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
    createElement(Path, {"d":"M21 8L3 8C2.449 8 2 7.551 2 7L2 4C2 3.449 2.449 3 3 3L21 3C21.551 3 22 3.449 22 4L22 7C22 7.551 21.551 8 21 8Z","key":"0"}),
    createElement(Path, {"d":"M20 8L18.262 19.305C18.109 20.281 17.27 21 16.285 21L7.715 21C6.73 21 5.891 20.281 5.738 19.305L4 8","key":"1"}),
    createElement(Path, {"d":"M12 12L12 17","key":"2"}),
    createElement(Path, {"d":"M10 14L12 12L14 14","key":"3"})
  );
});

TrashArrowUpBucket.displayName = 'TrashArrowUpBucket';

module.exports = TrashArrowUpBucket;
module.exports.TrashArrowUpBucket = TrashArrowUpBucket;
module.exports.default = TrashArrowUpBucket;
