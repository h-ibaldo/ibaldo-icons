'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowCornerRightDown = forwardRef(function ArrowCornerRightDown(
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
    createElement(Path, {"d":"M12 17L16 21L20 17","key":"0"}),
    createElement(Path, {"d":"M16 21L16 11C16 6.582 12.418 3 8 3L4 3","key":"1"})
  );
});

ArrowCornerRightDown.displayName = 'ArrowCornerRightDown';

module.exports = ArrowCornerRightDown;
module.exports.ArrowCornerRightDown = ArrowCornerRightDown;
module.exports.default = ArrowCornerRightDown;
