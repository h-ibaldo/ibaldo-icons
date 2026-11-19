'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListBullets = forwardRef(function ListBullets(
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
    createElement(Path, {"d":"M8 4L21 4","key":"0"}),
    createElement(Path, {"d":"M8 12L21 12","key":"1"}),
    createElement(Path, {"d":"M8 20L21 20","key":"2"}),
    createElement(Path, {"d":"M3 4L3 4","key":"3"}),
    createElement(Path, {"d":"M3 12L3 12","key":"4"}),
    createElement(Path, {"d":"M3 20L3 20","key":"5"})
  );
});

ListBullets.displayName = 'ListBullets';

module.exports = ListBullets;
module.exports.ListBullets = ListBullets;
module.exports.default = ListBullets;
