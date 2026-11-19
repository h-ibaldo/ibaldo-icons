'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BookOpenCurved = forwardRef(function BookOpenCurved(
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
    createElement(Path, {"d":"M12 21L12 7","key":"0"}),
    createElement(Path, {"d":"M12 21C10 18 5 17 2 17L2 3C5 3 10 4 12 7","key":"1"}),
    createElement(Path, {"d":"M12 21C14 18 19 17 22 17L22 3C19 3 14 4 12 7","key":"2"})
  );
});

BookOpenCurved.displayName = 'BookOpenCurved';

module.exports = BookOpenCurved;
module.exports.BookOpenCurved = BookOpenCurved;
module.exports.default = BookOpenCurved;
