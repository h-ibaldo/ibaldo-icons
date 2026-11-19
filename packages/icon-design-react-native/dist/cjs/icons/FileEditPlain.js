'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileEditPlain = forwardRef(function FileEditPlain(
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
    createElement(Path, {"d":"M21.707 8.912L20.121 7.327C19.728 6.933 19.089 6.937 18.7 7.334L11 15.034L11 18.034L14 18.034L21.715 10.319C22.098 9.927 22.095 9.3 21.707 8.912Z","key":"0"}),
    createElement(Path, {"d":"M18 4.034C18 2.929 17.105 2.034 16 2.034L4 2.034C2.895 2.034 2 2.929 2 4.034L2 20.034C2 21.138 2.895 22.034 4 22.034L16 22.034C17.105 22.034 18 21.138 18 20.034L18 19","key":"1"})
  );
});

FileEditPlain.displayName = 'FileEditPlain';

module.exports = FileEditPlain;
module.exports.FileEditPlain = FileEditPlain;
module.exports.default = FileEditPlain;
