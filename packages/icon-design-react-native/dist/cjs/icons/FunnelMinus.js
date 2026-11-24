'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FunnelMinus = forwardRef(function FunnelMinus(
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
    createElement(Path, {"d":"M16 5L22 5","key":"0"}),
    createElement(Path, {"d":"M16.219 11L14.039 14L14.039 20L10.039 22L10.039 14L3.191 4.59C2.711 3.926 3.184 3 4 3L13 3","key":"1"})
  );
});

FunnelMinus.displayName = 'FunnelMinus';

module.exports = FunnelMinus;
module.exports.FunnelMinus = FunnelMinus;
module.exports.default = FunnelMinus;
