'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileLinesDashedPlain = forwardRef(function FileLinesDashedPlain(
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
    createElement(Path, {"d":"M18 22.034L6 22.034C4.895 22.034 4 21.138 4 20.034L4 4.034C4 2.929 4.895 2.034 6 2.034L18 2.034C19.105 2.034 20 2.929 20 4.034L20 20.034C20 21.138 19.105 22.034 18 22.034Z","key":"0"}),
    createElement(Path, {"d":"M8 14.034L16 14.034","key":"1"}),
    createElement(Path, {"d":"M8 10.034L9 10.034","key":"2"}),
    createElement(Path, {"d":"M12 10.034L16 10.034","key":"3"}),
    createElement(Path, {"d":"M8 6.034L16 6.034","key":"4"}),
    createElement(Path, {"d":"M8 18.034L12 18.034","key":"5"}),
    createElement(Path, {"d":"M16 18.034L16 18.034","key":"6"})
  );
});

FileLinesDashedPlain.displayName = 'FileLinesDashedPlain';

module.exports = FileLinesDashedPlain;
module.exports.FileLinesDashedPlain = FileLinesDashedPlain;
module.exports.default = FileLinesDashedPlain;
