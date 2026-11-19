'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileArticleCut = forwardRef(function FileArticleCut(
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
    createElement(Path, {"d":"M21 20L21 7.828C21 7.298 20.789 6.789 20.414 6.414L16.586 2.586C16.211 2.211 15.702 2 15.172 2L5.172 2C4.067 2 3.172 2.895 3.172 4L3.172 20C3.172 21.105 4.067 22 5.172 22L19 22C20.105 22 21 21.105 21 20Z","key":"0"}),
    createElement(Path, {"d":"M11 10L7 10L7 6L11 6L11 10Z","key":"1"}),
    createElement(Path, {"d":"M15 10L17 10","key":"2"}),
    createElement(Path, {"d":"M7 14L17 14","key":"3"}),
    createElement(Path, {"d":"M7 18L17 18","key":"4"})
  );
});

FileArticleCut.displayName = 'FileArticleCut';

module.exports = FileArticleCut;
module.exports.FileArticleCut = FileArticleCut;
module.exports.default = FileArticleCut;
