'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkMenuWide = forwardRef(function LinkMenuWide(
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
    createElement(Path, {"d":"M11.496 19.5L10.496 20.5C8.566 22.434 5.43 22.434 3.496 20.5C1.566 18.566 1.566 15.434 3.496 13.5L7.496 9.5C9.43 7.566 12.566 7.566 14.496 9.5C14.848 9.852 15.113 10.246 15.336 10.66","key":"0"}),
    createElement(Path, {"d":"M12.496 4.5L13.496 3.5C15.43 1.566 18.566 1.566 20.496 3.5C22.43 5.434 22.43 8.566 20.496 10.5L16.496 14.5C14.566 16.434 11.43 16.434 9.496 14.5C9.148 14.148 8.883 13.754 8.66 13.336","key":"1"}),
    createElement(Path, {"d":"M2 2L8 2","key":"2"}),
    createElement(Path, {"d":"M2 5L8 5","key":"3"}),
    createElement(Path, {"d":"M2 8L4 8","key":"4"})
  );
});

LinkMenuWide.displayName = 'LinkMenuWide';

module.exports = LinkMenuWide;
module.exports.LinkMenuWide = LinkMenuWide;
module.exports.default = LinkMenuWide;
