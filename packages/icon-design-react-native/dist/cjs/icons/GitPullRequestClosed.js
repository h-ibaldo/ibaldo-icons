'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GitPullRequestClosed = forwardRef(function GitPullRequestClosed(
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
    createElement(Path, {"d":"M17.063 15C18.719 15 20.063 16.344 20.063 18C20.063 19.656 18.719 21 17.063 21C15.406 21 14.063 19.656 14.063 18C14.063 16.344 15.406 15 17.063 15Z","key":"0"}),
    createElement(Path, {"d":"M6 9C4.344 9 3 7.656 3 6C3 4.344 4.344 3 6 3C7.656 3 9 4.344 9 6C9 7.656 7.656 9 6 9Z","key":"1"}),
    createElement(Path, {"d":"M6 9L6 21","key":"2"}),
    createElement(Path, {"d":"M17 11L17 15","key":"3"}),
    createElement(Path, {"d":"M19 4L15 8","key":"4"}),
    createElement(Path, {"d":"M19 8L15 4","key":"5"})
  );
});

GitPullRequestClosed.displayName = 'GitPullRequestClosed';

module.exports = GitPullRequestClosed;
module.exports.GitPullRequestClosed = GitPullRequestClosed;
module.exports.default = GitPullRequestClosed;
