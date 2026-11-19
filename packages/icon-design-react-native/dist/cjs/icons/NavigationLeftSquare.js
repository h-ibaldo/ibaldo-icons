'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const NavigationLeftSquare = forwardRef(function NavigationLeftSquare(
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
    createElement(Path, {"d":"M14.344 6.977L7.531 11.066C6.824 11.488 6.824 12.512 7.531 12.934L14.344 17.023C15.215 17.547 16.262 16.703 15.941 15.746L14.809 12.344C14.734 12.121 14.734 11.879 14.809 11.656L15.941 8.254C16.262 7.293 15.215 6.453 14.344 6.977Z","key":"0"}),
    createElement(Path, {"d":"M5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22Z","key":"1"})
  );
});

NavigationLeftSquare.displayName = 'NavigationLeftSquare';

module.exports = NavigationLeftSquare;
module.exports.NavigationLeftSquare = NavigationLeftSquare;
module.exports.default = NavigationLeftSquare;
