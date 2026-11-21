'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MonitorPlay = forwardRef(function MonitorPlay(
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
    createElement(Path, {"d":"M2 4L22 4L22 18L2 18Z","key":"0"}),
    createElement(Path, {"d":"M12 21L12 18","key":"1"}),
    createElement(Path, {"d":"M18 21L6 21","key":"2"}),
    createElement(Path, {"d":"M10 14L10 8L15 11Z","key":"3"})
  );
});

MonitorPlay.displayName = 'MonitorPlay';

module.exports = MonitorPlay;
module.exports.MonitorPlay = MonitorPlay;
module.exports.default = MonitorPlay;
