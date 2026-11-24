'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListSearchXSDash = forwardRef(function ListSearchXSDash(
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
    createElement(Path, {"d":"M20.5 17C20.5 15.066 18.934 13.5 17 13.5C15.066 13.5 13.5 15.066 13.5 17C13.5 18.934 15.066 20.5 17 20.5C18.934 20.5 20.5 18.934 20.5 17Z","key":"0"}),
    createElement(Path, {"d":"M19.477 19.477L22 22","key":"1"}),
    createElement(Path, {"d":"M8 4L15.5 4","key":"2"}),
    createElement(Path, {"d":"M8 9L15.5 9","key":"3"}),
    createElement(Path, {"d":"M3 4L4 4","key":"4"}),
    createElement(Path, {"d":"M3 9L4 9","key":"5"}),
    createElement(Path, {"d":"M8 14L10 14","key":"6"}),
    createElement(Path, {"d":"M3 14L4 14","key":"7"})
  );
});

ListSearchXSDash.displayName = 'ListSearchXSDash';

module.exports = ListSearchXSDash;
module.exports.ListSearchXSDash = ListSearchXSDash;
module.exports.default = ListSearchXSDash;
