'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Superscript = forwardRef(function Superscript(
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
    createElement(Path, {"d":"M2 7L12 22","key":"0"}),
    createElement(Path, {"d":"M12 7L2 22","key":"1"}),
    createElement(Path, {"d":"M16 4.027C16 2.906 16.906 2 18.027 2L18.973 2C20.094 2 21 2.906 21 4.027C21 4.641 20.719 5.223 20.238 5.609L17.563 7.75C16.574 8.539 16 9.734 16 11L21 11","key":"2"})
  );
});

Superscript.displayName = 'Superscript';

module.exports = Superscript;
module.exports.Superscript = Superscript;
module.exports.default = Superscript;
