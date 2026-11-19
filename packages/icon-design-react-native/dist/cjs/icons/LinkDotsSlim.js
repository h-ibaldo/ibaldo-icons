'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkDotsSlim = forwardRef(function LinkDotsSlim(
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
    createElement(Path, {"d":"M11.027 11.996L10.027 12.996C8.66 14.363 8.66 16.582 10.027 17.945L10.074 17.996C11.441 19.363 13.66 19.363 15.027 17.996L21 12.023C22.367 10.656 22.367 8.441 21 7.074L20.949 7.023C19.762 5.836 17.938 5.684 16.586 6.559","key":"0"}),
    createElement(Path, {"d":"M13 15.027L14 14.027C15.367 12.66 15.367 10.441 14 9.074L13.949 9.027C12.582 7.66 10.367 7.66 9 9.027L3.023 15C1.656 16.367 1.656 18.582 3.023 19.949L3.074 20C4.262 21.188 6.086 21.34 7.441 20.465","key":"1"}),
    createElement(Path, {"d":"M3 4L3 4","key":"2"}),
    createElement(Path, {"d":"M7 4L7 4","key":"3"})
  );
});

LinkDotsSlim.displayName = 'LinkDotsSlim';

module.exports = LinkDotsSlim;
module.exports.LinkDotsSlim = LinkDotsSlim;
module.exports.default = LinkDotsSlim;
