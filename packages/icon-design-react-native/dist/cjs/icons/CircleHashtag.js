'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CircleHashtag = forwardRef(function CircleHashtag(
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
    createElement(Path, {"d":"M16 22L17 14","key":"0"}),
    createElement(Path, {"d":"M20 22L21 14","key":"1"}),
    createElement(Path, {"d":"M15 16L22 16","key":"2"}),
    createElement(Path, {"d":"M15 20L22 20","key":"3"}),
    createElement(Path, {"d":"M21.797 10C20.871 5.438 16.836 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22","key":"4"})
  );
});

CircleHashtag.displayName = 'CircleHashtag';

module.exports = CircleHashtag;
module.exports.CircleHashtag = CircleHashtag;
module.exports.default = CircleHashtag;
