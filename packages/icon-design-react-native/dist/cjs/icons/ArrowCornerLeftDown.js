'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowCornerLeftDown = forwardRef(function ArrowCornerLeftDown(
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
    createElement(Path, {"d":"M12 17L8 21L4 17","key":"0"}),
    createElement(Path, {"d":"M8 21L8 11C8 6.582 11.582 3 16 3L20 3","key":"1"})
  );
});

ArrowCornerLeftDown.displayName = 'ArrowCornerLeftDown';

module.exports = ArrowCornerLeftDown;
module.exports.ArrowCornerLeftDown = ArrowCornerLeftDown;
module.exports.default = ArrowCornerLeftDown;
