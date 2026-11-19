'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileXCornerPlain = forwardRef(function FileXCornerPlain(
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
    createElement(Path, {"d":"M21 17.034L16 22.034","key":"0"}),
    createElement(Path, {"d":"M21 22.034L16 17.034","key":"1"}),
    createElement(Path, {"d":"M20 13.034L20 4.034C20 2.929 19.105 2.034 18 2.034L6 2.034C4.895 2.034 4 2.929 4 4.034L4 20.034C4 21.138 4.895 22.034 6 22.034L11 22.034","key":"2"})
  );
});

FileXCornerPlain.displayName = 'FileXCornerPlain';

module.exports = FileXCornerPlain;
module.exports.FileXCornerPlain = FileXCornerPlain;
module.exports.default = FileXCornerPlain;
