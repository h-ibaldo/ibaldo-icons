'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkArrowUpSlim = forwardRef(function LinkArrowUpSlim(
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
    createElement(Path, {"d":"M13 12.973L14 13.973C15.367 15.34 15.367 17.559 14 18.926L13.949 18.973C12.582 20.34 10.367 20.34 9 18.973L3.023 13C1.656 11.633 1.656 9.418 3.023 8.051L3.074 8C4.262 6.813 6.086 6.66 7.441 7.535","key":"0"}),
    createElement(Path, {"d":"M11.027 16.004L10.027 15.004C8.66 13.637 8.66 11.418 10.027 10.055L10.074 10.004C11.441 8.637 13.66 8.637 15.027 10.004L21 15.977C22.367 17.344 22.367 19.559 21 20.926L20.949 20.977C19.762 22.164 17.938 22.316 16.586 21.441","key":"1"}),
    createElement(Path, {"d":"M22.004 4L20.004 2L18.004 4","key":"2"}),
    createElement(Path, {"d":"M20.004 8L20.004 2","key":"3"})
  );
});

LinkArrowUpSlim.displayName = 'LinkArrowUpSlim';

module.exports = LinkArrowUpSlim;
module.exports.LinkArrowUpSlim = LinkArrowUpSlim;
module.exports.default = LinkArrowUpSlim;
