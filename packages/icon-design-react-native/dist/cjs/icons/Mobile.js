'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Mobile = forwardRef(function Mobile(
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
    createElement(Path, {"d":"M16 22L8 22C6.895 22 6 21.105 6 20L6 4C6 2.895 6.895 2 8 2L16 2C17.105 2 18 2.895 18 4L18 20C18 21.105 17.105 22 16 22Z","key":"0"}),
    createElement(Path, {"d":"M6 18L18 18","key":"1"}),
    createElement(Path, {"d":"M6 6L18 6","key":"2"})
  );
});

Mobile.displayName = 'Mobile';

module.exports = Mobile;
module.exports.Mobile = Mobile;
module.exports.default = Mobile;
