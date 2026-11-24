'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowClockwiseTenChevron = forwardRef(function ArrowClockwiseTenChevron(
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
    createElement(Path, {"d":"M18 2L20 4L18 6","key":"0"}),
    createElement(Path, {"d":"M12 4C7.027 4 3 8.027 3 13C3 17.973 7.027 22 12 22C16.973 22 21 17.973 21 13C21 11.945 20.809 10.938 20.477 10","key":"1"}),
    createElement(Path, {"d":"M12 4L20 4","key":"2"}),
    createElement(Path, {"d":"M14.5 17C13.395 17 12.5 16.105 12.5 15L12.5 11C12.5 9.895 13.395 9 14.5 9C15.605 9 16.5 9.895 16.5 11L16.5 15C16.5 16.105 15.605 17 14.5 17Z","key":"3"}),
    createElement(Path, {"d":"M9 17L9 9L8 9","key":"4"})
  );
});

ArrowClockwiseTenChevron.displayName = 'ArrowClockwiseTenChevron';

module.exports = ArrowClockwiseTenChevron;
module.exports.ArrowClockwiseTenChevron = ArrowClockwiseTenChevron;
module.exports.default = ArrowClockwiseTenChevron;
