'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkMinusFlat = forwardRef(function LinkMinusFlat(
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
    createElement(Path, {"d":"M6.5 5C4.016 5 2 7.016 2 9.5C2 11.984 4.016 14 6.5 14L10.5 14C12.984 14 15 11.984 15 9.5C15 9.328 14.973 9.164 14.949 9","key":"0"}),
    createElement(Path, {"d":"M17.5 14C19.984 14 22 11.984 22 9.5C22 7.016 19.984 5 17.5 5L13.5 5C11.016 5 9 7.016 9 9.5C9 9.672 9.027 9.836 9.051 10","key":"1"}),
    createElement(Path, {"d":"M22 19L16 19","key":"2"})
  );
});

LinkMinusFlat.displayName = 'LinkMinusFlat';

module.exports = LinkMinusFlat;
module.exports.LinkMinusFlat = LinkMinusFlat;
module.exports.default = LinkMinusFlat;
