'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownFromBar = forwardRef(function ArrowDownFromBar(
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
    createElement(Path, {"d":"M16 17L12 21L8 17","key":"0"}),
    createElement(Path, {"d":"M7 3L17 3","key":"1"}),
    createElement(Path, {"d":"M12 21L12 3","key":"2"})
  );
});

ArrowDownFromBar.displayName = 'ArrowDownFromBar';

module.exports = ArrowDownFromBar;
module.exports.ArrowDownFromBar = ArrowDownFromBar;
module.exports.default = ArrowDownFromBar;
