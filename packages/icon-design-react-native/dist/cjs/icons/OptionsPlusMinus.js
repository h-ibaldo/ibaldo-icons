'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const OptionsPlusMinus = forwardRef(function OptionsPlusMinus(
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
    createElement(Path, {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z","key":"0"}),
    createElement(Path, {"d":"M19 17L15 17","key":"1"}),
    createElement(Path, {"d":"M12 7C12 9.762 9.762 12 7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2C9.762 2 12 4.238 12 7Z","key":"2"}),
    createElement(Path, {"d":"M7 5L7 9","key":"3"}),
    createElement(Path, {"d":"M9 7L5 7","key":"4"})
  );
});

OptionsPlusMinus.displayName = 'OptionsPlusMinus';

module.exports = OptionsPlusMinus;
module.exports.OptionsPlusMinus = OptionsPlusMinus;
module.exports.default = OptionsPlusMinus;
