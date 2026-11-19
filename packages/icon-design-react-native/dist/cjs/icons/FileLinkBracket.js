'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileLinkBracket = forwardRef(function FileLinkBracket(
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
    createElement(Path, {"d":"M6 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L12.758 2C13.555 2 14.316 2.316 14.879 2.879L18.121 6.121C18.684 6.684 19 7.445 19 8.242L19 12","key":"0"}),
    createElement(Path, {"d":"M13 2L13 6C13 7.105 13.895 8 15 8L19 8","key":"1"}),
    createElement(Path, {"d":"M13 19L17 19","key":"2"}),
    createElement(Path, {"d":"M13 22L12 22C10.344 22 9 20.656 9 19C9 17.344 10.344 16 12 16L13 16","key":"3"}),
    createElement(Path, {"d":"M17 16L18 16C19.656 16 21 17.344 21 19C21 20.656 19.656 22 18 22L17 22","key":"4"})
  );
});

FileLinkBracket.displayName = 'FileLinkBracket';

module.exports = FileLinkBracket;
module.exports.FileLinkBracket = FileLinkBracket;
module.exports.default = FileLinkBracket;
