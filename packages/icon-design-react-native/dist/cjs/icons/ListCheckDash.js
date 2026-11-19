'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListCheckDash = forwardRef(function ListCheckDash(
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
    createElement(Path, {"d":"M8 5L14 5","key":"0"}),
    createElement(Path, {"d":"M8 10L14 10","key":"1"}),
    createElement(Path, {"d":"M3 5L4 5","key":"2"}),
    createElement(Path, {"d":"M3 10L4 10","key":"3"}),
    createElement(Path, {"d":"M8 15L14 15","key":"4"}),
    createElement(Path, {"d":"M3 15L4 15","key":"5"}),
    createElement(Path, {"d":"M16 19L18 21L21.5 16.5","key":"6"})
  );
});

ListCheckDash.displayName = 'ListCheckDash';

module.exports = ListCheckDash;
module.exports.ListCheckDash = ListCheckDash;
module.exports.default = ListCheckDash;
