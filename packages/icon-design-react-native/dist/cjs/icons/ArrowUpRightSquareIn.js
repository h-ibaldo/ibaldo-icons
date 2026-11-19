'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpRightSquareIn = forwardRef(function ArrowUpRightSquareIn(
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
    createElement(Path, {"d":"M14.004 20.98L19.004 20.98C20.109 20.98 21.004 20.082 21.004 18.98L21.004 4.98C21.004 3.875 20.109 2.98 19.004 2.98L5.004 2.98C3.898 2.98 3.004 3.875 3.004 4.98L3.004 9.98","key":"0"}),
    createElement(Path, {"d":"M14.004 15.98L14.004 9.98L8.004 9.98","key":"1"}),
    createElement(Path, {"d":"M13.004 10.98L5.004 18.98","key":"2"})
  );
});

ArrowUpRightSquareIn.displayName = 'ArrowUpRightSquareIn';

module.exports = ArrowUpRightSquareIn;
module.exports.ArrowUpRightSquareIn = ArrowUpRightSquareIn;
module.exports.default = ArrowUpRightSquareIn;
