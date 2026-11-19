'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FilePaperclipCut = forwardRef(function FilePaperclipCut(
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
    createElement(Path, {"d":"M19 9L19 4C19 2.895 18.105 2 17 2L8.984 2C8.354 2 7.75 2.25 7.304 2.696L3.696 6.304C3.25 6.75 3 7.354 3 7.984L3 20C3 21.105 3.895 22 5 22L8 22","key":"0"}),
    createElement(Path, {"d":"M16 13L11.828 17.172C10.724 18.276 10.724 20.067 11.828 21.172L11.828 21.172C12.933 22.276 14.724 22.276 15.828 21.172L21.586 15.414C22.138 14.862 22.138 13.966 21.586 13.414L21.586 13.414C21.034 12.862 20.138 12.862 19.586 13.414L15 18","key":"1"})
  );
});

FilePaperclipCut.displayName = 'FilePaperclipCut';

module.exports = FilePaperclipCut;
module.exports.FilePaperclipCut = FilePaperclipCut;
module.exports.default = FilePaperclipCut;
