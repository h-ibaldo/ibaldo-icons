'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileStackLinesPlain = forwardRef(function FileStackLinesPlain(
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
    createElement(Path, {"d":"M11 14.034L17 14.034","key":"0"}),
    createElement(Path, {"d":"M11 10.034L17 10.034","key":"1"}),
    createElement(Path, {"d":"M11 6.034L17 6.034","key":"2"}),
    createElement(Path, {"d":"M3 7.034L3 20.034C3 21.138 3.895 22.034 5 22.034L16 22.034","key":"3"}),
    createElement(Path, {"d":"M9 18.034L19 18.034C20.105 18.034 21 17.138 21 16.034L21 4.034C21 2.929 20.105 2.034 19 2.034L9 2.034C7.895 2.034 7 2.929 7 4.034L7 16.034C7 17.138 7.895 18.034 9 18.034Z","key":"4"})
  );
});

FileStackLinesPlain.displayName = 'FileStackLinesPlain';

module.exports = FileStackLinesPlain;
module.exports.FileStackLinesPlain = FileStackLinesPlain;
module.exports.default = FileStackLinesPlain;
