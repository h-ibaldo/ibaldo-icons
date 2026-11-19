'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CrownJewel = forwardRef(function CrownJewel(
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
    createElement(Path, {"d":"M4 17L3 6L6.07 10.297C6.945 11.523 8.813 11.379 9.484 10.027L12 5L14.516 10.027C15.188 11.379 17.055 11.523 17.93 10.297L21 6L20 17Z","key":"0"}),
    createElement(Path, {"d":"M4 21L20 21","key":"1"}),
    createElement(Path, {"d":"M4 6C4 6.551 3.555 7 3 7C2.445 7 2 6.551 2 6C2 5.449 2.445 5 3 5C3.555 5 4 5.449 4 6Z","key":"2"}),
    createElement(Path, {"d":"M22 6C22 6.551 21.555 7 21 7C20.445 7 20 6.551 20 6C20 5.449 20.445 5 21 5C21.555 5 22 5.449 22 6Z","key":"3"}),
    createElement(Path, {"d":"M13 4C13 4.551 12.555 5 12 5C11.445 5 11 4.551 11 4C11 3.449 11.445 3 12 3C12.555 3 13 3.449 13 4Z","key":"4"})
  );
});

CrownJewel.displayName = 'CrownJewel';

module.exports = CrownJewel;
module.exports.CrownJewel = CrownJewel;
module.exports.default = CrownJewel;
