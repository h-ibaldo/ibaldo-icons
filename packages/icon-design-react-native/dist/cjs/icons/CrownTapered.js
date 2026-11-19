'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CrownTapered = forwardRef(function CrownTapered(
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
    createElement(Path, {"d":"M4 16L3 5L8 10L12 4L16 10L21 5L20 16Z","key":"0"}),
    createElement(Path, {"d":"M4 20L20 20","key":"1"})
  );
});

CrownTapered.displayName = 'CrownTapered';

module.exports = CrownTapered;
module.exports.CrownTapered = CrownTapered;
module.exports.default = CrownTapered;
