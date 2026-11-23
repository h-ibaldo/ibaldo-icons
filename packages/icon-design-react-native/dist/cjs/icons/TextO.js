'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextO = forwardRef(function TextO(
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
    createElement(Path, {"d":"M12 2C7 2 4 6 4 12C4 18 7 22 12 22","key":"0"}),
    createElement(Path, {"d":"M12 22C17 22 20 18 20 12C20 6 17 2 12 2","key":"1"})
  );
});

TextO.displayName = 'TextO';

module.exports = TextO;
module.exports.TextO = TextO;
module.exports.default = TextO;
