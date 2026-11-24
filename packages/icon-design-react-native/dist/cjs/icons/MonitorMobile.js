'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MonitorMobile = forwardRef(function MonitorMobile(
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
    createElement(Path, {"d":"M14 16L2 16L2 3L22 3L22 9","key":"0"}),
    createElement(Path, {"d":"M12 20L12 16","key":"1"}),
    createElement(Path, {"d":"M14 20L6 20","key":"2"}),
    createElement(Path, {"d":"M18 12L21 12C21.551 12 22 12.449 22 13L22 20C22 20.551 21.551 21 21 21L18 21C17.449 21 17 20.551 17 20L17 13C17 12.449 17.449 12 18 12Z","key":"3"})
  );
});

MonitorMobile.displayName = 'MonitorMobile';

module.exports = MonitorMobile;
module.exports.MonitorMobile = MonitorMobile;
module.exports.default = MonitorMobile;
