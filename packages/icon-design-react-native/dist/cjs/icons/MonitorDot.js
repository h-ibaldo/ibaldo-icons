'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MonitorDot = forwardRef(function MonitorDot(
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
    createElement(Path, {"d":"M22 11L22 18L2 18L2 4L14 4","key":"0"}),
    createElement(Path, {"d":"M12 21L12 18","key":"1"}),
    createElement(Path, {"d":"M18 21L6 21","key":"2"}),
    createElement(Path, {"d":"M17 5.5C17 4.121 18.121 3 19.5 3C20.879 3 22 4.121 22 5.5C22 6.879 20.879 8 19.5 8C18.121 8 17 6.879 17 5.5Z","key":"3"})
  );
});

MonitorDot.displayName = 'MonitorDot';

module.exports = MonitorDot;
module.exports.MonitorDot = MonitorDot;
module.exports.default = MonitorDot;
