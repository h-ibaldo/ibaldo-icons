'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileTrianglePlain = forwardRef(function FileTrianglePlain(
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
    createElement(Path, {"d":"M19 11L19 4C19 2.895 18.105 2 17 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L8 22","key":"0"}),
    createElement(Path, {"d":"M12.796 22L19.498 22C20.664 22 21.384 20.728 20.784 19.728L17.433 14.144C16.851 13.173 15.443 13.173 14.861 14.144L11.51 19.728C10.91 20.728 11.63 22 12.796 22Z","key":"1"})
  );
});

FileTrianglePlain.displayName = 'FileTrianglePlain';

module.exports = FileTrianglePlain;
module.exports.FileTrianglePlain = FileTrianglePlain;
module.exports.default = FileTrianglePlain;
