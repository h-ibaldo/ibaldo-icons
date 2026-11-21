'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const WebcamRingWide = forwardRef(function WebcamRingWide(
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
    createElement(Path, {"d":"M9.039 8.082C9.039 6.379 10.418 5 12.121 5C13.82 5 15.203 6.379 15.203 8.082C15.203 9.781 13.82 11.164 12.121 11.164C10.418 11.164 9.039 9.781 9.039 8.082Z","key":"0"}),
    createElement(Path, {"d":"M4 2L20 2C21.105 2 22 2.895 22 4L22 12C22 13.105 21.105 14 20 14L4 14C2.895 14 2 13.105 2 12L2 4C2 2.895 2.895 2 4 2Z","key":"1"}),
    createElement(Path, {"d":"M9 18L15 18C17.211 18 19 19.789 19 22L5 22C5 19.789 6.789 18 9 18Z","key":"2"}),
    createElement(Path, {"d":"M10 14L10 18","key":"3"}),
    createElement(Path, {"d":"M14 14L14 18","key":"4"}),
    createElement(Path, {"d":"M5.672 11C5.242 10.09 5 9.074 5 8C5 6.926 5.242 5.91 5.672 5","key":"5"}),
    createElement(Path, {"d":"M18.328 5C18.758 5.91 19 6.926 19 8C19 9.074 18.758 10.09 18.328 11","key":"6"})
  );
});

WebcamRingWide.displayName = 'WebcamRingWide';

module.exports = WebcamRingWide;
module.exports.WebcamRingWide = WebcamRingWide;
module.exports.default = WebcamRingWide;
