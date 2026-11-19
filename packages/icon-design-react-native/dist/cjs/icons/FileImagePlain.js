'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileImagePlain = forwardRef(function FileImagePlain(
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
    createElement(Path, {"d":"M5 21.034L10 16.034L12 18.034L16 14.034L20 18.034","key":"0"}),
    createElement(Path, {"d":"M18 22.034L6 22.034C4.895 22.034 4 21.138 4 20.034L4 4.034C4 2.929 4.895 2.034 6 2.034L18 2.034C19.105 2.034 20 2.929 20 4.034L20 20.034C20 21.138 19.105 22.034 18 22.034Z","key":"1"}),
    createElement(Path, {"d":"M12 10C12 11.105 11.105 12 10 12C8.895 12 8 11.105 8 10C8 8.895 8.895 8 10 8C11.105 8 12 8.895 12 10Z","key":"2"})
  );
});

FileImagePlain.displayName = 'FileImagePlain';

module.exports = FileImagePlain;
module.exports.FileImagePlain = FileImagePlain;
module.exports.default = FileImagePlain;
