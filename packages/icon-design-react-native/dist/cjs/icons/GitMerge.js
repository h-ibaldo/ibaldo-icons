'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GitMerge = forwardRef(function GitMerge(
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
    createElement(Path, {"d":"M3 6C3 7.656 4.344 9 6 9C7.656 9 9 7.656 9 6C9 4.344 7.656 3 6 3C4.344 3 3 4.344 3 6Z","key":"0"}),
    createElement(Path, {"d":"M15 18C15 19.656 16.344 21 18 21C19.656 21 21 19.656 21 18C21 16.344 19.656 15 18 15C16.344 15 15 16.344 15 18Z","key":"1"}),
    createElement(Path, {"d":"M6 9L6 21","key":"2"}),
    createElement(Path, {"d":"M6 9C6 13.969 10.031 18 15 18","key":"3"})
  );
});

GitMerge.displayName = 'GitMerge';

module.exports = GitMerge;
module.exports.GitMerge = GitMerge;
module.exports.default = GitMerge;
