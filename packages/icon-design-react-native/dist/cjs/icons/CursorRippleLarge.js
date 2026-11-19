'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CursorRippleLarge = forwardRef(function CursorRippleLarge(
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
    createElement(Path, {"d":"M18.934 22L14.699 17.766L13.367 20.461C13.082 21.035 12.25 20.98 12.039 20.379L8.043 8.965C7.844 8.391 8.391 7.844 8.965 8.043L20.379 12.035C20.98 12.25 21.035 13.082 20.461 13.367L17.766 14.699L22 18.934Z","key":"0"}),
    createElement(Path, {"d":"M15.316 6C14.191 3.637 11.793 2 9 2C5.133 2 2 5.133 2 9C2 11.789 3.637 14.191 6 15.316","key":"1"})
  );
});

CursorRippleLarge.displayName = 'CursorRippleLarge';

module.exports = CursorRippleLarge;
module.exports.CursorRippleLarge = CursorRippleLarge;
module.exports.default = CursorRippleLarge;
