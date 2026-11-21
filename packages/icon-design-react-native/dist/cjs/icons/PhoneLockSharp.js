'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PhoneLockSharp = forwardRef(function PhoneLockSharp(
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
    createElement(Path, {"d":"M5.895 11.594L5.926 11.684C6.961 14.652 9.309 16.977 12.285 17.984","key":"0"}),
    createElement(Path, {"d":"M12.363 15.59L13.883 14.789L17.879 17.188L17.293 20.113C17.16 20.789 16.723 21.363 16.105 21.668C15.699 21.871 15.242 21.945 14.793 21.883L13.488 21.695C11.133 21.359 8.91 20.398 7.051 18.91C6.281 18.297 5.586 17.598 4.969 16.828C3.48 14.973 2.52 12.746 2.184 10.391L1.996 9.086C1.934 8.637 2.008 8.18 2.211 7.773C2.52 7.16 3.094 6.719 3.766 6.586L6.691 6L9.09 9.996L8.367 10.793","key":"1"}),
    createElement(Path, {"d":"M13 6L20 6L20 11L13 11Z","key":"2"}),
    createElement(Path, {"d":"M19 6L19 4C19 2.895 18.105 2 17 2L16 2C14.895 2 14 2.895 14 4L14 6","key":"3"})
  );
});

PhoneLockSharp.displayName = 'PhoneLockSharp';

module.exports = PhoneLockSharp;
module.exports.PhoneLockSharp = PhoneLockSharp;
module.exports.default = PhoneLockSharp;
