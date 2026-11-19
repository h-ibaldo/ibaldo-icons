'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GaugeHalf = forwardRef(function GaugeHalf(
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
    createElement(Path, {"d":"M19 17L20.938 17C21.457 17 21.887 16.605 21.941 16.09C22.043 15.16 22.016 14.188 21.84 13.199C21.07 8.863 17.398 5.48 13.02 5.051C7.039 4.461 2 9.141 2 15C2 15.371 2.02 15.738 2.063 16.102C2.117 16.613 2.547 17 3.063 17L5 17","key":"0"}),
    createElement(Path, {"d":"M13.926 17.535C14.223 16.473 13.602 15.367 12.535 15.074C11.473 14.777 10.371 15.398 10.074 16.465C9.777 17.527 10.398 18.629 11.461 18.926C12.527 19.223 13.629 18.602 13.926 17.535Z","key":"1"}),
    createElement(Path, {"d":"M16.617 11.895L13.336 15.523","key":"2"})
  );
});

GaugeHalf.displayName = 'GaugeHalf';

module.exports = GaugeHalf;
module.exports.GaugeHalf = GaugeHalf;
module.exports.default = GaugeHalf;
