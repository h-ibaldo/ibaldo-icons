'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Cable = forwardRef(function Cable(
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
    createElement(Path, {"d":"M6 2L6 5","key":"0"}),
    createElement(Path, {"d":"M18 22L18 19","key":"1"}),
    createElement(Path, {"d":"M4 5L8 5L8 9C8 10.105 7.105 11 6 11C4.895 11 4 10.105 4 9Z","key":"2"}),
    createElement(Path, {"d":"M20 19L16 19L16 15C16 13.895 16.895 13 18 13C19.105 13 20 13.895 20 15Z","key":"3"}),
    createElement(Path, {"d":"M6 11L6 15.156C6 17.23 8.766 17.934 9.758 16.113L14.242 7.887C15.234 6.066 18 6.77 18 8.844L18 13","key":"4"})
  );
});

Cable.displayName = 'Cable';

module.exports = Cable;
module.exports.Cable = Cable;
module.exports.default = Cable;
