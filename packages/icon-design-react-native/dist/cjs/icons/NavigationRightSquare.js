'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const NavigationRightSquare = forwardRef(function NavigationRightSquare(
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
    createElement(Path, {"d":"M9.656 6.977L16.469 11.066C17.176 11.488 17.176 12.512 16.469 12.934L9.656 17.023C8.785 17.547 7.738 16.703 8.059 15.746L9.191 12.344C9.266 12.121 9.266 11.879 9.191 11.656L8.059 8.254C7.738 7.293 8.785 6.453 9.656 6.977Z","key":"0"}),
    createElement(Path, {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"1"})
  );
});

NavigationRightSquare.displayName = 'NavigationRightSquare';

module.exports = NavigationRightSquare;
module.exports.NavigationRightSquare = NavigationRightSquare;
module.exports.default = NavigationRightSquare;
