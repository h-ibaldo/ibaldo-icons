'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileLinesEditCornerPlain = forwardRef(function FileLinesEditCornerPlain(
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
    createElement(Path, {"d":"M21.414 21.276C22.195 20.495 22.195 19.229 21.414 18.448L15 12.034L12 12.034L12 15.034L18.414 21.448C19.195 22.229 20.462 22.229 21.243 21.448L21.414 21.276Z","key":"0"}),
    createElement(Path, {"d":"M17 20.034L20 17.034","key":"1"}),
    createElement(Path, {"d":"M17 21.034","key":"2"}),
    createElement(Path, {"d":"M14 22.034L4 22.034C2.895 22.034 2 21.138 2 20.034L2 4.034C2 2.929 2.895 2.034 4 2.034L16 2.034C17.105 2.034 18 2.929 18 4.034L18 9.034","key":"3"}),
    createElement(Path, {"d":"M6 8.034L14 8.034","key":"4"}),
    createElement(Path, {"d":"M6 12.034L8 12.034","key":"5"}),
    createElement(Path, {"d":"M6 16.034L8 16.034","key":"6"})
  );
});

FileLinesEditCornerPlain.displayName = 'FileLinesEditCornerPlain';

module.exports = FileLinesEditCornerPlain;
module.exports.FileLinesEditCornerPlain = FileLinesEditCornerPlain;
module.exports.default = FileLinesEditCornerPlain;
