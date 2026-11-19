'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkCheckSlim = forwardRef(function LinkCheckSlim(
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
    createElement(Path, {"d":"M11.027 8.996L10.027 9.996C8.66 11.363 8.66 13.582 10.027 14.945L10.074 14.996C11.441 16.363 13.66 16.363 15.027 14.996L21 9.023C22.367 7.656 22.367 5.441 21 4.074L20.949 4.023C19.762 2.836 17.938 2.684 16.586 3.559","key":"0"}),
    createElement(Path, {"d":"M13 12.027L14 11.027C15.367 9.66 15.367 7.441 14 6.074L13.949 6.027C12.582 4.66 10.367 4.66 9 6.027L3.023 12C1.656 13.367 1.656 15.582 3.023 16.949L3.074 17C4.262 18.188 6.086 18.34 7.441 17.465","key":"1"}),
    createElement(Path, {"d":"M16 20L18 22L22 18","key":"2"})
  );
});

LinkCheckSlim.displayName = 'LinkCheckSlim';

module.exports = LinkCheckSlim;
module.exports.LinkCheckSlim = LinkCheckSlim;
module.exports.default = LinkCheckSlim;
