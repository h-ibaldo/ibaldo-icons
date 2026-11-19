'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownCircleDashedHalf = forwardRef(function ArrowDownCircleDashedHalf(
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
    createElement(Path, {"d":"M11 21.949C11.328 21.98 11.66 22 12 22C12.34 22 12.672 21.984 13 21.949","key":"0"}),
    createElement(Path, {"d":"M3.883 6.16C3.691 6.43 3.508 6.707 3.34 7C3.172 7.293 3.02 7.59 2.883 7.891","key":"1"}),
    createElement(Path, {"d":"M6.16 20.117C6.43 20.309 6.707 20.492 7 20.66C7.293 20.828 7.59 20.98 7.891 21.117","key":"2"}),
    createElement(Path, {"d":"M7.867 2.895C7.566 3.031 7.27 3.184 6.977 3.352C6.684 3.523 6.406 3.707 6.137 3.898","key":"3"}),
    createElement(Path, {"d":"M2.883 16.109C3.02 16.41 3.172 16.707 3.34 17C3.508 17.293 3.691 17.57 3.883 17.84","key":"4"}),
    createElement(Path, {"d":"M2.051 11C2.02 11.328 2 11.664 2 12C2 12.336 2.02 12.672 2.051 13","key":"5"}),
    createElement(Path, {"d":"M15 13L12 16L9 13","key":"6"}),
    createElement(Path, {"d":"M12 8L12 16","key":"7"}),
    createElement(Path, {"d":"M16.133 21.098C19.59 19.527 22 16.047 22 12C22 6.477 17.523 2 12 2C11.66 2 11.328 2.016 11 2.051","key":"8"})
  );
});

ArrowDownCircleDashedHalf.displayName = 'ArrowDownCircleDashedHalf';

module.exports = ArrowDownCircleDashedHalf;
module.exports.ArrowDownCircleDashedHalf = ArrowDownCircleDashedHalf;
module.exports.default = ArrowDownCircleDashedHalf;
