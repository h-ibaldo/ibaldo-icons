'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GitCompare = forwardRef(function GitCompare(
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
    createElement(Path, {"d":"M5 3C6.656 3 8 4.344 8 6C8 7.656 6.656 9 5 9C3.344 9 2 7.656 2 6C2 4.344 3.344 3 5 3Z","key":"0"}),
    createElement(Path, {"d":"M19 3C20.656 3 22 4.344 22 6C22 7.656 20.656 9 19 9C17.344 9 16 7.656 16 6C16 4.344 17.344 3 19 3Z","key":"1"}),
    createElement(Path, {"d":"M5 15C6.656 15 8 16.344 8 18C8 19.656 6.656 21 5 21C3.344 21 2 19.656 2 18C2 16.344 3.344 15 5 15Z","key":"2"}),
    createElement(Path, {"d":"M5 9L5 15","key":"3"}),
    createElement(Path, {"d":"M12 3L12 21","key":"4"}),
    createElement(Path, {"d":"M19 9L19 9.836C19 11.727 17.793 13.402 16 14","key":"5"})
  );
});

GitCompare.displayName = 'GitCompare';

module.exports = GitCompare;
module.exports.GitCompare = GitCompare;
module.exports.default = GitCompare;
