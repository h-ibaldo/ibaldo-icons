'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const StopwatchDottedKnob = forwardRef(function StopwatchDottedKnob(
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
    createElement(Path, {"d":"M10 2L14 2","key":"0"}),
    createElement(Path, {"d":"M20 5L22 7","key":"1"}),
    createElement(Path, {"d":"M21 6L18.563 8.438","key":"2"}),
    createElement(Path, {"d":"M12 8.5L12 13","key":"3"}),
    createElement(Path, {"d":"M12 5C16.418 5 20 8.582 20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13","key":"4"}),
    createElement(Path, {"d":"M12 5C7.582 5 4 8.582 4 13","strokeDasharray":"0 3.2","key":"5"})
  );
});

StopwatchDottedKnob.displayName = 'StopwatchDottedKnob';

module.exports = StopwatchDottedKnob;
module.exports.StopwatchDottedKnob = StopwatchDottedKnob;
module.exports.default = StopwatchDottedKnob;
