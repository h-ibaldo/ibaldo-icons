'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkMenuSlim = forwardRef(function LinkMenuSlim(
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
    createElement(Path, {"d":"M11.027 12.973L10.027 13.973C8.66 15.34 8.66 17.559 10.027 18.926L10.074 18.973C11.441 20.34 13.66 20.34 15.027 18.973L21 13C22.367 11.633 22.367 9.418 21 8.051L20.949 8C19.762 6.813 17.938 6.66 16.586 7.535","key":"0"}),
    createElement(Path, {"d":"M13 16.004L14 15.004C15.367 13.637 15.367 11.418 14 10.055L13.949 10.004C12.582 8.637 10.367 8.637 9 10.004L3.023 15.977C1.656 17.344 1.656 19.559 3.023 20.926L3.074 20.977C4.262 22.164 6.086 22.316 7.441 21.441","key":"1"}),
    createElement(Path, {"d":"M2 2L9 2","key":"2"}),
    createElement(Path, {"d":"M2 5L9 5","key":"3"}),
    createElement(Path, {"d":"M2 8L5 8","key":"4"})
  );
});

LinkMenuSlim.displayName = 'LinkMenuSlim';

module.exports = LinkMenuSlim;
module.exports.LinkMenuSlim = LinkMenuSlim;
module.exports.default = LinkMenuSlim;
