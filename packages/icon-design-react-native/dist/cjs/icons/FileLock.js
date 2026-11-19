'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileLock = forwardRef(function FileLock(
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
    createElement(Path, {"d":"M4 9L4 4C4 2.895 4.895 2 6 2L14.016 2C14.646 2 15.25 2.25 15.696 2.696L19.304 6.304C19.75 6.75 20 7.354 20 7.984L20 20C20 21.105 19.105 22 18 22L16 22","key":"0"}),
    createElement(Path, {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8","key":"1"}),
    createElement(Path, {"d":"M12 22L4 22L4 17L12 17L12 22Z","key":"2"}),
    createElement(Path, {"d":"M5 17L5 15C5 13.343 6.343 12 8 12L8 12C9.657 12 11 13.343 11 15L11 17","key":"3"})
  );
});

FileLock.displayName = 'FileLock';

module.exports = FileLock;
module.exports.FileLock = FileLock;
module.exports.default = FileLock;
