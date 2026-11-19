'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowCornerLeftUp = forwardRef(function ArrowCornerLeftUp(
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
    createElement(Path, {"d":"M12 7L8 3L4 7","key":"0"}),
    createElement(Path, {"d":"M8 3L8 13C8 17.418 11.582 21 16 21L20 21","key":"1"})
  );
});

ArrowCornerLeftUp.displayName = 'ArrowCornerLeftUp';

module.exports = ArrowCornerLeftUp;
module.exports.ArrowCornerLeftUp = ArrowCornerLeftUp;
module.exports.default = ArrowCornerLeftUp;
