'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkArrowUpClip = forwardRef(function LinkArrowUpClip(
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
    createElement(Path, {"d":"M16 16L8 8","key":"0"}),
    createElement(Path, {"d":"M13 6L10.5 3.5C8.566 1.566 5.434 1.566 3.5 3.5C1.566 5.434 1.566 8.566 3.5 10.5L6 13","key":"1"}),
    createElement(Path, {"d":"M11 18L13.5 20.5C15.434 22.434 18.566 22.434 20.5 20.5C22.434 18.566 22.434 15.434 20.5 13.5L18 11","key":"2"}),
    createElement(Path, {"d":"M22.004 4L20.004 2L18.004 4","key":"3"}),
    createElement(Path, {"d":"M20.004 7L20.004 2","key":"4"})
  );
});

LinkArrowUpClip.displayName = 'LinkArrowUpClip';

module.exports = LinkArrowUpClip;
module.exports.LinkArrowUpClip = LinkArrowUpClip;
module.exports.default = LinkArrowUpClip;
