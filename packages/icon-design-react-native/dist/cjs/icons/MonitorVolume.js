'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MonitorVolume = forwardRef(function MonitorVolume(
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
    createElement(Path, {"d":"M8 9L6 9L6 13L8 13L12 15L12 7Z","key":"3"}),
    createElement(Path, {"d":"M15 9.586C15.781 10.367 15.781 11.633 15 12.414","key":"4"}),
    createElement(Path, {"d":"M17.207 7.793C18.977 9.563 18.977 12.438 17.207 14.207","key":"5"})
  );
});

MonitorVolume.displayName = 'MonitorVolume';

module.exports = MonitorVolume;
module.exports.MonitorVolume = MonitorVolume;
module.exports.default = MonitorVolume;
