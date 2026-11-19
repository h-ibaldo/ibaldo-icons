'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileCastCut = forwardRef(function FileCastCut(
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
    createElement(Path, {"d":"M5 22C5 21.448 4.552 21 4 21","key":"0"}),
    createElement(Path, {"d":"M9 22C9 19.239 6.761 17 4 17","key":"1"}),
    createElement(Path, {"d":"M13 22C13 17.029 8.971 13 4 13","key":"2"}),
    createElement(Path, {"d":"M17 22L18 22C19.105 22 20 21.105 20 20L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 9","key":"3"})
  );
});

FileCastCut.displayName = 'FileCastCut';

module.exports = FileCastCut;
module.exports.FileCastCut = FileCastCut;
module.exports.default = FileCastCut;
