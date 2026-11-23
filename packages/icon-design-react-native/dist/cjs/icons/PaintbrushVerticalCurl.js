'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PaintbrushVerticalCurl = forwardRef(function PaintbrushVerticalCurl(
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
    createElement(Path, {"d":"M5 11L19 11L19 6.051C19 4.691 18.445 3.391 17.465 2.445L17 2L3 2L3.535 2.535C4.473 3.473 5 4.746 5 6.07Z","key":"0"}),
    createElement(Path, {"d":"M4 13L4 11L20 11L20 13C20 14.105 19.105 15 18 15L14 15L14 20C14 21.105 13.105 22 12 22C10.895 22 10 21.105 10 20L10 15L6 15C4.895 15 4 14.105 4 13Z","key":"1"}),
    createElement(Path, {"d":"M5 6L19 8","key":"2"})
  );
});

PaintbrushVerticalCurl.displayName = 'PaintbrushVerticalCurl';

module.exports = PaintbrushVerticalCurl;
module.exports.PaintbrushVerticalCurl = PaintbrushVerticalCurl;
module.exports.default = PaintbrushVerticalCurl;
