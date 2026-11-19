'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowCounterclockwiseFiveChevron = forwardRef(function ArrowCounterclockwiseFiveChevron(
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
    createElement(Path, {"d":"M6 2L4 4L6 6","key":"0"}),
    createElement(Path, {"d":"M12 4C16.973 4 21 8.027 21 13C21 17.973 16.973 22 12 22C7.027 22 3 17.973 3 13C3 11.945 3.191 10.938 3.523 10","key":"1"}),
    createElement(Path, {"d":"M12 4L4 4","key":"2"}),
    createElement(Path, {"d":"M14 9L10 9L10 12.5L11.75 12.5C12.992 12.5 14 13.508 14 14.75C14 15.992 12.992 17 11.75 17L10 17","key":"3"})
  );
});

ArrowCounterclockwiseFiveChevron.displayName = 'ArrowCounterclockwiseFiveChevron';

module.exports = ArrowCounterclockwiseFiveChevron;
module.exports.ArrowCounterclockwiseFiveChevron = ArrowCounterclockwiseFiveChevron;
module.exports.default = ArrowCounterclockwiseFiveChevron;
