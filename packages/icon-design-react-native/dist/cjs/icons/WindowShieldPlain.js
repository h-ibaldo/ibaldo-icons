'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const WindowShieldPlain = forwardRef(function WindowShieldPlain(
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
    createElement(Path, {"d":"M9 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 9","key":"0"}),
    createElement(Path, {"d":"M2 8L22 8","key":"1"}),
    createElement(Path, {"d":"M22 14C20.695 14 19.422 13.613 18.336 12.891L17 12L15.664 12.891C14.578 13.613 13.305 14 12 14L12 16.734C12 18.141 12.738 19.441 13.941 20.164L17 22L20.059 20.164C21.262 19.441 22 18.141 22 16.734Z","key":"2"})
  );
});

WindowShieldPlain.displayName = 'WindowShieldPlain';

module.exports = WindowShieldPlain;
module.exports.WindowShieldPlain = WindowShieldPlain;
module.exports.default = WindowShieldPlain;
