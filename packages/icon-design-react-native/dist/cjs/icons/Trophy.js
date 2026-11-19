'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Trophy = forwardRef(function Trophy(
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
    createElement(Path, {"d":"M12 17C8.688 17 6 14.313 6 11L6 2L18 2L18 11C18 14.313 15.313 17 12 17Z","key":"0"}),
    createElement(Path, {"d":"M18 11L18.5 11C20.434 11 22 9.434 22 7.5C22 5.566 20.434 4 18.5 4L18 4","key":"1"}),
    createElement(Path, {"d":"M6 11L5.5 11C3.566 11 2 9.434 2 7.5C2 5.566 3.566 4 5.5 4L6 4","key":"2"}),
    createElement(Path, {"d":"M8 22L16 22","key":"3"}),
    createElement(Path, {"d":"M12 17L12 22","key":"4"})
  );
});

Trophy.displayName = 'Trophy';

module.exports = Trophy;
module.exports.Trophy = Trophy;
module.exports.default = Trophy;
