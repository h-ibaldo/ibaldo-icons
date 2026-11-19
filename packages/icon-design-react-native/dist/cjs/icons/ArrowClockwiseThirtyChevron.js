'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowClockwiseThirtyChevron = forwardRef(function ArrowClockwiseThirtyChevron(
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
    createElement(Path, {"d":"M15 17C13.895 17 13 16.105 13 15L13 11C13 9.895 13.895 9 15 9C16.105 9 17 9.895 17 11L17 15C17 16.105 16.105 17 15 17Z","key":"3"}),
    createElement(Path, {"d":"M7 16.723C7.402 16.957 7.887 17.07 8.41 16.957C9.363 16.75 10 15.832 10 14.859C10 13.832 9.168 13 8.145 13L8 13","key":"4"}),
    createElement(Path, {"d":"M7 9.277C7.402 9.043 7.887 8.93 8.41 9.043C9.363 9.25 10 10.168 10 11.141C10 12.168 9.168 13 8.145 13L8 13","key":"5"})
  );
});

ArrowClockwiseThirtyChevron.displayName = 'ArrowClockwiseThirtyChevron';

module.exports = ArrowClockwiseThirtyChevron;
module.exports.ArrowClockwiseThirtyChevron = ArrowClockwiseThirtyChevron;
module.exports.default = ArrowClockwiseThirtyChevron;
