'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListGroupsDash = forwardRef(function ListGroupsDash(
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
    createElement(Path, {"d":"M9 20L21 20","key":"1"}),
    createElement(Path, {"d":"M3 4L4 4","key":"2"}),
    createElement(Path, {"d":"M9 8L21 8","key":"3"}),
    createElement(Path, {"d":"M3 8L4 8","key":"4"}),
    createElement(Path, {"d":"M9 16L21 16","key":"5"}),
    createElement(Path, {"d":"M3 16L4 16","key":"6"}),
    createElement(Path, {"d":"M3 20L4 20","key":"7"})
  );
});

ListGroupsDash.displayName = 'ListGroupsDash';

module.exports = ListGroupsDash;
module.exports.ListGroupsDash = ListGroupsDash;
module.exports.default = ListGroupsDash;
