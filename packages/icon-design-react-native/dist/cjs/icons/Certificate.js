'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Certificate = forwardRef(function Certificate(
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
    createElement(Path, {"d":"M22 13C22 15.211 20.211 17 18 17C15.789 17 14 15.211 14 13C14 10.789 15.789 9 18 9C20.211 9 22 10.789 22 13Z","key":"0"}),
    createElement(Path, {"d":"M15 15.621L15 22L18 21L21 22L21 15.621","key":"1"}),
    createElement(Path, {"d":"M11 20L5 20C3.895 20 3 19.105 3 18L3 4C3 2.895 3.895 2 5 2L18 2C19.105 2 20 2.895 20 4L20 6","key":"2"}),
    createElement(Path, {"d":"M7 7L13 7","key":"3"}),
    createElement(Path, {"d":"M7 11L10 11","key":"4"}),
    createElement(Path, {"d":"M7 15L10 15","key":"5"})
  );
});

Certificate.displayName = 'Certificate';

module.exports = Certificate;
module.exports.Certificate = Certificate;
module.exports.default = Certificate;
