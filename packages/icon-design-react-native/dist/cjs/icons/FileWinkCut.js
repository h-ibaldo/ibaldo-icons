'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileWinkCut = forwardRef(function FileWinkCut(
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
    createElement(Path, {"d":"M9 15C9.776 15.614 10.827 16 12 16C13.173 16 14.224 15.614 15 15","key":"0"}),
    createElement(Path, {"d":"M15 11L15 11","key":"1"}),
    createElement(Path, {"d":"M10 11L8 11","key":"2"}),
    createElement(Path, {"d":"M20 20L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L18 22C19.105 22 20 21.105 20 20Z","key":"3"})
  );
});

FileWinkCut.displayName = 'FileWinkCut';

module.exports = FileWinkCut;
module.exports.FileWinkCut = FileWinkCut;
module.exports.default = FileWinkCut;
