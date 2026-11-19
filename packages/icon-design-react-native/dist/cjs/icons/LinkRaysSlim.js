'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkRaysSlim = forwardRef(function LinkRaysSlim(
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
    createElement(Path, {"d":"M11.023 12.148L10.023 13.148C8.656 14.512 8.656 16.73 10.023 18.094L10.074 18.148C11.441 19.512 13.656 19.512 15.023 18.148L21 12.172C22.367 10.805 22.367 8.59 21 7.223L20.949 7.172C19.762 5.984 17.938 5.832 16.582 6.707","key":"0"}),
    createElement(Path, {"d":"M13 15.172L14 14.172C15.367 12.809 15.367 10.59 14 9.223L13.949 9.172C12.582 7.809 10.367 7.809 9 9.172L3.023 15.148C1.656 16.516 1.656 18.73 3.023 20.098L3.074 20.148C4.262 21.336 6.086 21.488 7.441 20.613","key":"1"}),
    createElement(Path, {"d":"M11.242 2L11.242 4","key":"2"}),
    createElement(Path, {"d":"M6 3.758L7.414 5.172","key":"3"})
  );
});

LinkRaysSlim.displayName = 'LinkRaysSlim';

module.exports = LinkRaysSlim;
module.exports.LinkRaysSlim = LinkRaysSlim;
module.exports.default = LinkRaysSlim;
