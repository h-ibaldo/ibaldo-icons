'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MonitorPause = forwardRef(function MonitorPause(
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
    createElement(Path, {"d":"M10 9L10 13","key":"0"}),
    createElement(Path, {"d":"M14 9L14 13","key":"1"}),
    createElement(Path, {"d":"M2 4L22 4L22 18L2 18Z","key":"2"}),
    createElement(Path, {"d":"M12 21L12 18","key":"3"}),
    createElement(Path, {"d":"M18 21L6 21","key":"4"})
  );
});

MonitorPause.displayName = 'MonitorPause';

module.exports = MonitorPause;
module.exports.MonitorPause = MonitorPause;
module.exports.default = MonitorPause;
