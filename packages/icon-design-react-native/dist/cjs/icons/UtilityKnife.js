'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const UtilityKnife = forwardRef(function UtilityKnife(
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
    createElement(Path, {"d":"M21 6L17 2L5 14L9 18Z","key":"0"}),
    createElement(Path, {"d":"M8.5 17.5L4 22L3 17L5.5 14.5","key":"1"}),
    createElement(Path, {"d":"M18 9L14 5","key":"2"}),
    createElement(Path, {"d":"M13 10L14 9","key":"3"})
  );
});

UtilityKnife.displayName = 'UtilityKnife';

module.exports = UtilityKnife;
module.exports.UtilityKnife = UtilityKnife;
module.exports.default = UtilityKnife;
