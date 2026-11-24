'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const DatabaseDense = forwardRef(function DatabaseDense(
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
    createElement(Path, {"d":"M4 6C4 4.344 7.582 3 12 3C16.418 3 20 4.344 20 6C20 7.656 16.418 9 12 9C7.582 9 4 7.656 4 6Z","key":"0"}),
    createElement(Path, {"d":"M20 6L20 18","key":"1"}),
    createElement(Path, {"d":"M4 18L4 6","key":"2"}),
    createElement(Path, {"d":"M20 10C20 11.656 16.418 13 12 13C7.582 13 4 11.656 4 10","key":"3"}),
    createElement(Path, {"d":"M20 14C20 15.656 16.418 17 12 17C7.582 17 4 15.656 4 14","key":"4"}),
    createElement(Path, {"d":"M20 18C20 19.656 16.418 21 12 21C7.582 21 4 19.656 4 18","key":"5"})
  );
});

DatabaseDense.displayName = 'DatabaseDense';

module.exports = DatabaseDense;
module.exports.DatabaseDense = DatabaseDense;
module.exports.default = DatabaseDense;
