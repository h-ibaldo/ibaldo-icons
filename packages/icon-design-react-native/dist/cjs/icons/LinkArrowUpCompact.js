'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkArrowUpCompact = forwardRef(function LinkArrowUpCompact(
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
    createElement(Path, {"d":"M15 17L7 9","key":"0"}),
    createElement(Path, {"d":"M12.949 7.949L10.449 5.449C8.516 3.516 5.383 3.516 3.449 5.449C1.516 7.383 1.516 10.516 3.449 12.449L5.949 14.949","key":"1"}),
    createElement(Path, {"d":"M9.051 18.051L11.551 20.551C13.484 22.484 16.617 22.484 18.551 20.551C20.484 18.617 20.484 15.484 18.551 13.551L16.051 11.051","key":"2"}),
    createElement(Path, {"d":"M22.004 4L20.004 2L18.004 4","key":"3"}),
    createElement(Path, {"d":"M20.004 9L20.004 2","key":"4"})
  );
});

LinkArrowUpCompact.displayName = 'LinkArrowUpCompact';

module.exports = LinkArrowUpCompact;
module.exports.LinkArrowUpCompact = LinkArrowUpCompact;
module.exports.default = LinkArrowUpCompact;
