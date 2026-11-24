'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextF = forwardRef(function TextF(
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
    createElement(Path, {"d":"M5 22.023L5 2L18.039 2","key":"0"}),
    createElement(Path, {"d":"M6 13L16 13","key":"1"})
  );
});

TextF.displayName = 'TextF';

module.exports = TextF;
module.exports.TextF = TextF;
module.exports.default = TextF;
