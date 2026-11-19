'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowCornerRightUp = forwardRef(function ArrowCornerRightUp(
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
    createElement(Path, {"d":"M12 7L16 3L20 7","key":"0"}),
    createElement(Path, {"d":"M16 3L16 13C16 17.418 12.418 21 8 21L4 21","key":"1"})
  );
});

ArrowCornerRightUp.displayName = 'ArrowCornerRightUp';

module.exports = ArrowCornerRightUp;
module.exports.ArrowCornerRightUp = ArrowCornerRightUp;
module.exports.default = ArrowCornerRightUp;
