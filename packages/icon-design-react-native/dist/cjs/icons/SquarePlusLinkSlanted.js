'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SquarePlusLinkSlanted = forwardRef(function SquarePlusLinkSlanted(
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
    createElement(Path, {"d":"M22 8L22 7C22 4.238 19.762 2 17 2L7 2C4.238 2 2 4.238 2 7L2 17C2 19.762 4.238 22 7 22L8 22","key":"0"}),
    createElement(Path, {"d":"M20 18L21.172 16.828C22.277 15.723 22.277 13.934 21.172 12.828C20.066 11.723 18.277 11.723 17.172 12.828L16 14","key":"1"}),
    createElement(Path, {"d":"M14 16L12.828 17.172C11.723 18.277 11.723 20.066 12.828 21.172C13.934 22.277 15.723 22.277 16.828 21.172L18 20","key":"2"}),
    createElement(Path, {"d":"M18 16L16 18","key":"3"}),
    createElement(Path, {"d":"M7 9.5L12 9.5","key":"4"}),
    createElement(Path, {"d":"M9.5 7L9.5 12","key":"5"})
  );
});

SquarePlusLinkSlanted.displayName = 'SquarePlusLinkSlanted';

module.exports = SquarePlusLinkSlanted;
module.exports.SquarePlusLinkSlanted = SquarePlusLinkSlanted;
module.exports.default = SquarePlusLinkSlanted;
