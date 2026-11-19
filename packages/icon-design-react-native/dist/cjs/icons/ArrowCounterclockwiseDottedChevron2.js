'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowCounterclockwiseDottedChevron2 = forwardRef(function ArrowCounterclockwiseDottedChevron2(
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
    createElement(Path, {"d":"M7 2L4 5L7 8","key":"0"}),
    createElement(Path, {"d":"M12 5C16.418 5 20 8.582 20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13","key":"1"}),
    createElement(Path, {"d":"M4 5L12 5","key":"2"}),
    createElement(Path, {"d":"M12 13L12 13","key":"3"}),
    createElement(Path, {"d":"M12 10L12 10","key":"4"}),
    createElement(Path, {"d":"M12 16L12 16","key":"5"}),
    createElement(Path, {"d":"M9.402 11.5L9.402 11.5","key":"6"}),
    createElement(Path, {"d":"M14.598 14.5L14.598 14.5","key":"7"}),
    createElement(Path, {"d":"M9.402 14.5L9.402 14.5","key":"8"}),
    createElement(Path, {"d":"M14.598 11.5L14.598 11.5","key":"9"})
  );
});

ArrowCounterclockwiseDottedChevron2.displayName = 'ArrowCounterclockwiseDottedChevron2';

module.exports = ArrowCounterclockwiseDottedChevron2;
module.exports.ArrowCounterclockwiseDottedChevron2 = ArrowCounterclockwiseDottedChevron2;
module.exports.default = ArrowCounterclockwiseDottedChevron2;
