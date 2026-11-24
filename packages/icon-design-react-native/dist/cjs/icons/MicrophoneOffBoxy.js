'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MicrophoneOffBoxy = forwardRef(function MicrophoneOffBoxy(
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
    createElement(Path, {"d":"M8 22L16 22","key":"0"}),
    createElement(Path, {"d":"M12 22L12 18","key":"1"}),
    createElement(Path, {"d":"M21 2L3 19","key":"2"}),
    createElement(Path, {"d":"M5.84 16.316C6.918 17.355 8.383 18 10 18L14 18C17.313 18 20 15.313 20 12L20 11","key":"3"}),
    createElement(Path, {"d":"M4 11L4 12C4 12.383 4.039 12.758 4.109 13.121","key":"4"}),
    createElement(Path, {"d":"M15.301 2.492C14.949 2.188 14.5 2 14 2L10 2C8.895 2 8 2.895 8 4L8 9.391","key":"5"}),
    createElement(Path, {"d":"M8.762 13.559C9.102 13.832 9.527 14 10 14L14 14C15.105 14 16 13.105 16 12L16 6.723","key":"6"})
  );
});

MicrophoneOffBoxy.displayName = 'MicrophoneOffBoxy';

module.exports = MicrophoneOffBoxy;
module.exports.MicrophoneOffBoxy = MicrophoneOffBoxy;
module.exports.default = MicrophoneOffBoxy;
