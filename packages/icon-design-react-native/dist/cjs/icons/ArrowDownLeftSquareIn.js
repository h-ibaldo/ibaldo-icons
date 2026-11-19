'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownLeftSquareIn = forwardRef(function ArrowDownLeftSquareIn(
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
    createElement(Path, {"d":"M21.004 13.98L21.004 18.98C21.004 20.082 20.109 20.98 19.004 20.98L5.004 20.98C3.898 20.98 3.004 20.082 3.004 18.98L3.004 4.98C3.004 3.875 3.898 2.98 5.004 2.98L10.004 2.98","key":"0"}),
    createElement(Path, {"d":"M16.004 13.98L10.004 13.98L10.004 7.98","key":"1"}),
    createElement(Path, {"d":"M11.004 12.98L19.004 4.98","key":"2"})
  );
});

ArrowDownLeftSquareIn.displayName = 'ArrowDownLeftSquareIn';

module.exports = ArrowDownLeftSquareIn;
module.exports.ArrowDownLeftSquareIn = ArrowDownLeftSquareIn;
module.exports.default = ArrowDownLeftSquareIn;
