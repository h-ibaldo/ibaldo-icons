'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListDash = forwardRef(function ListDash(
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
    createElement(Path, {"d":"M9 4L21 4","key":"0"}),
    createElement(Path, {"d":"M9 12L21 12","key":"1"}),
    createElement(Path, {"d":"M9 20L21 20","key":"2"}),
    createElement(Path, {"d":"M3 4L4 4","key":"3"}),
    createElement(Path, {"d":"M3 12L4 12","key":"4"}),
    createElement(Path, {"d":"M3 20L4 20","key":"5"})
  );
});

ListDash.displayName = 'ListDash';

module.exports = ListDash;
module.exports.ListDash = ListDash;
module.exports.default = ListDash;
