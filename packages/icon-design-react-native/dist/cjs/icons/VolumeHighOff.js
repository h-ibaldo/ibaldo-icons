'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const VolumeHighOff = forwardRef(function VolumeHighOff(
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
    createElement(Path, {"d":"M3 4L20 21","key":"0"}),
    createElement(Path, {"d":"M12 8L12 5.176C12 4.32 10.996 3.859 10.348 4.414L9.309 5.309","key":"1"}),
    createElement(Path, {"d":"M6.613 7.613L5 9L3 9C2.449 9 2 9.445 2 10L2 14C2 14.551 2.449 15 3 15L5 15L10.348 19.586C11 20.141 12 19.68 12 18.828L12 13","key":"2"}),
    createElement(Path, {"d":"M16 12C16 10.895 15.551 9.895 14.828 9.172","key":"3"}),
    createElement(Path, {"d":"M18.523 14.523C18.828 13.742 19 12.891 19 12C19 10.066 18.215 8.316 16.949 7.051","key":"4"}),
    createElement(Path, {"d":"M20.781 16.781C21.559 15.363 22 13.73 22 12C22 9.238 20.883 6.738 19.07 4.93","key":"5"})
  );
});

VolumeHighOff.displayName = 'VolumeHighOff';

module.exports = VolumeHighOff;
module.exports.VolumeHighOff = VolumeHighOff;
module.exports.default = VolumeHighOff;
