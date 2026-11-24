'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PhoneClockSharp = forwardRef(function PhoneClockSharp(
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
    createElement(Path, {"d":"M12 7C12 9.762 14.238 12 17 12C19.762 12 22 9.762 22 7C22 4.238 19.762 2 17 2C14.238 2 12 4.238 12 7Z","key":"0"}),
    createElement(Path, {"d":"M17 5L17 7L19 7","key":"1"}),
    createElement(Path, {"d":"M5.844 11.594L5.875 11.684C6.91 14.652 9.258 16.977 12.234 17.984","key":"2"}),
    createElement(Path, {"d":"M12.313 15.59L13.832 14.789L17.828 17.188L17.242 20.113C17.109 20.789 16.668 21.363 16.055 21.668C15.648 21.871 15.191 21.945 14.742 21.883L13.438 21.695C11.082 21.359 8.855 20.398 7 18.91C6.23 18.297 5.531 17.598 4.918 16.828C3.43 14.973 2.469 12.746 2.133 10.391L1.945 9.086C1.883 8.637 1.957 8.18 2.16 7.773C2.465 7.16 3.039 6.719 3.715 6.586L6.641 6L9.039 9.996L8.316 10.793","key":"3"})
  );
});

PhoneClockSharp.displayName = 'PhoneClockSharp';

module.exports = PhoneClockSharp;
module.exports.PhoneClockSharp = PhoneClockSharp;
module.exports.default = PhoneClockSharp;
