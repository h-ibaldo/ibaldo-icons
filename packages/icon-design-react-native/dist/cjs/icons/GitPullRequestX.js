'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GitPullRequestX = forwardRef(function GitPullRequestX(
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
    createElement(Path, {"d":"M18 15C19.656 15 21 16.344 21 18C21 19.656 19.656 21 18 21C16.344 21 15 19.656 15 18C15 16.344 16.344 15 18 15Z","key":"0"}),
    createElement(Path, {"d":"M18 15L18 8C18 6.895 17.105 6 16 6L10.938 6","key":"1"}),
    createElement(Path, {"d":"M6.063 21L6.063 11","key":"2"}),
    createElement(Path, {"d":"M3 3L9.098 9","key":"3"}),
    createElement(Path, {"d":"M3 9L9.098 3","key":"4"})
  );
});

GitPullRequestX.displayName = 'GitPullRequestX';

module.exports = GitPullRequestX;
module.exports.GitPullRequestX = GitPullRequestX;
module.exports.default = GitPullRequestX;
