'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GitBranch = forwardRef(function GitBranch(
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
    createElement(Path, {"d":"M3 18C3 16.344 4.344 15 6 15C7.656 15 9 16.344 9 18C9 19.656 7.656 21 6 21C4.344 21 3 19.656 3 18Z","key":"0"}),
    createElement(Path, {"d":"M15 6C15 4.344 16.344 3 18 3C19.656 3 21 4.344 21 6C21 7.656 19.656 9 18 9C16.344 9 15 7.656 15 6Z","key":"1"}),
    createElement(Path, {"d":"M6 15L6 3","key":"2"}),
    createElement(Path, {"d":"M6 15C6 10.031 10.031 6 15 6","key":"3"})
  );
});

GitBranch.displayName = 'GitBranch';

module.exports = GitBranch;
module.exports.GitBranch = GitBranch;
module.exports.default = GitBranch;
