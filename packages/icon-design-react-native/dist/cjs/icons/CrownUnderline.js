'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CrownUnderline = forwardRef(function CrownUnderline(
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
    createElement(Path, {"d":"M3 16L3 7L8 10L12 4L16 10L21 7L21 16Z","key":"0"}),
    createElement(Path, {"d":"M3 20L21 20","key":"1"})
  );
});

CrownUnderline.displayName = 'CrownUnderline';

module.exports = CrownUnderline;
module.exports.CrownUnderline = CrownUnderline;
module.exports.default = CrownUnderline;
