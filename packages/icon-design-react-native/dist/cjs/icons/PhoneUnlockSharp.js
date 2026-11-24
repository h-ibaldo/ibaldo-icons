'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PhoneUnlockSharp = forwardRef(function PhoneUnlockSharp(
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
    createElement(Path, {"d":"M5.836 11.594L5.867 11.684C6.906 14.652 9.254 16.977 12.23 17.984","key":"0"}),
    createElement(Path, {"d":"M12.305 15.59L13.828 14.789L17.824 17.188L17.238 20.113C17.102 20.789 16.664 21.363 16.047 21.668C15.645 21.871 15.184 21.945 14.734 21.883L13.434 21.695C11.074 21.359 8.852 20.398 6.992 18.91C6.227 18.297 5.527 17.598 4.914 16.828C3.426 14.973 2.465 12.746 2.125 10.391L1.941 9.086C1.875 8.637 1.949 8.18 2.152 7.773C2.461 7.16 3.035 6.719 3.711 6.586L6.637 6L9.031 9.996L8.309 10.793","key":"1"}),
    createElement(Path, {"d":"M11.941 6L18.941 6L18.941 11L11.941 11Z","key":"2"}),
    createElement(Path, {"d":"M22 6L22 4C22 2.895 21.105 2 20 2L19 2C17.895 2 17 2.895 17 4L17 6","key":"3"})
  );
});

PhoneUnlockSharp.displayName = 'PhoneUnlockSharp';

module.exports = PhoneUnlockSharp;
module.exports.PhoneUnlockSharp = PhoneUnlockSharp;
module.exports.default = PhoneUnlockSharp;
