'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkSplitApart = forwardRef(function LinkSplitApart(
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
    createElement(Path, {"d":"M12.281 4.543L17.594 3.121C19.461 2.621 21.379 3.727 21.879 5.594C22.379 7.461 21.273 9.383 19.406 9.883L14.094 11.305","key":"0"}),
    createElement(Path, {"d":"M11.305 14.094L9.883 19.406C9.383 21.273 7.461 22.379 5.594 21.879C3.727 21.379 2.621 19.461 3.121 17.594L4.543 12.281","key":"1"}),
    createElement(Path, {"d":"M4 4L8 8","key":"2"})
  );
});

LinkSplitApart.displayName = 'LinkSplitApart';

module.exports = LinkSplitApart;
module.exports.LinkSplitApart = LinkSplitApart;
module.exports.default = LinkSplitApart;
