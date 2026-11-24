'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GraphicsCard = forwardRef(function GraphicsCard(
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
    createElement(Path, {"d":"M2 3L5 3L5 20.035","key":"0"}),
    createElement(Path, {"d":"M5 6L2 6L2 10L5 10","key":"1"}),
    createElement(Path, {"d":"M5 18L22 18L22 5L5 5","key":"2"}),
    createElement(Path, {"d":"M5 13L2 13L2 17L5 17","key":"3"}),
    createElement(Path, {"d":"M8 18L8 21L11 21L11 18","key":"4"}),
    createElement(Path, {"d":"M14 18L14 21L20 21L20 18","key":"5"}),
    createElement(Path, {"d":"M14 18L14 21","key":"6"})
  );
});

GraphicsCard.displayName = 'GraphicsCard';

module.exports = GraphicsCard;
module.exports.GraphicsCard = GraphicsCard;
module.exports.default = GraphicsCard;
