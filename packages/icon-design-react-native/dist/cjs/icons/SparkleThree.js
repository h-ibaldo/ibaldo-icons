'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SparkleThree = forwardRef(function SparkleThree(
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
    createElement(Path, {"d":"M2 7C4.211 7 6 8.789 6 11","key":"0"}),
    createElement(Path, {"d":"M10 7C7.789 7 6 8.789 6 11","key":"1"}),
    createElement(Path, {"d":"M10 7C7.789 7 6 5.211 6 3","key":"2"}),
    createElement(Path, {"d":"M2 7C4.211 7 6 5.211 6 3","key":"3"}),
    createElement(Path, {"d":"M14 11C16.211 11 18 12.789 18 15","key":"4"}),
    createElement(Path, {"d":"M22 11C19.789 11 18 12.789 18 15","key":"5"}),
    createElement(Path, {"d":"M22 11C19.789 11 18 9.211 18 7","key":"6"}),
    createElement(Path, {"d":"M14 11C16.211 11 18 9.211 18 7","key":"7"}),
    createElement(Path, {"d":"M6 18C8.211 18 10 19.789 10 22","key":"8"}),
    createElement(Path, {"d":"M14 18C11.789 18 10 19.789 10 22","key":"9"}),
    createElement(Path, {"d":"M14 18C11.789 18 10 16.211 10 14","key":"10"}),
    createElement(Path, {"d":"M6 18C8.211 18 10 16.211 10 14","key":"11"})
  );
});

SparkleThree.displayName = 'SparkleThree';

module.exports = SparkleThree;
module.exports.SparkleThree = SparkleThree;
module.exports.default = SparkleThree;
