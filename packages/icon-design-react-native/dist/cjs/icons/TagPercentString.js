'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TagPercentString = forwardRef(function TagPercentString(
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
    createElement(Path, {"d":"M19.895 19L7.852 19C7.246 19 6.676 18.727 6.297 18.254L2.27 13.254C1.68 12.523 1.68 11.477 2.27 10.746L6.297 5.746C6.676 5.273 7.246 5 7.852 5L19.895 5C21 5 21.895 5.895 21.895 7L21.895 17C21.895 18.105 21 19 19.895 19Z","key":"0"}),
    createElement(Path, {"d":"M7.895 13C7.344 13 6.895 12.551 6.895 12C6.895 11.449 7.344 11 7.895 11C8.445 11 8.895 11.449 8.895 12C8.895 12.551 8.445 13 7.895 13Z","key":"1"}),
    createElement(Path, {"d":"M7.895 12L2.895 5","key":"2"}),
    createElement(Path, {"d":"M13.066 9L13.066 9","key":"3"}),
    createElement(Path, {"d":"M18.066 15L18.066 15","key":"4"}),
    createElement(Path, {"d":"M13.066 15L18.066 9","key":"5"})
  );
});

TagPercentString.displayName = 'TagPercentString';

module.exports = TagPercentString;
module.exports.TagPercentString = TagPercentString;
module.exports.default = TagPercentString;
