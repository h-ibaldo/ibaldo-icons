'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkBrokenSlim = forwardRef(function LinkBrokenSlim(
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
    createElement(Path, {"d":"M11.027 12.977L10.027 13.977C8.66 15.344 8.66 17.559 10.027 18.926L10.074 18.977C11.441 20.344 13.66 20.344 15.027 18.977L21 13C22.367 11.633 22.367 9.418 21 8.051L20.949 8C19.762 6.812 17.938 6.66 16.586 7.535","key":"0"}),
    createElement(Path, {"d":"M2 10L4 10","key":"1"}),
    createElement(Path, {"d":"M9 3L9 5","key":"2"}),
    createElement(Path, {"d":"M3.758 4.758L5.172 6.172","key":"3"}),
    createElement(Path, {"d":"M14 15.004C15.367 13.637 15.367 11.418 14 10.051L13.949 10.004C13.398 9.453 12.715 9.137 12 9.027","key":"4"}),
    createElement(Path, {"d":"M6 13L3.023 15.977C1.656 17.344 1.656 19.559 3.023 20.926L3.074 20.977C4.262 22.164 6.086 22.316 7.441 21.441","key":"5"})
  );
});

LinkBrokenSlim.displayName = 'LinkBrokenSlim';

module.exports = LinkBrokenSlim;
module.exports.LinkBrokenSlim = LinkBrokenSlim;
module.exports.default = LinkBrokenSlim;
