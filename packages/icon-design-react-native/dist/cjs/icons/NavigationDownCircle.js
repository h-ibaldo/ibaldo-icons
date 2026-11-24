'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const NavigationDownCircle = forwardRef(function NavigationDownCircle(
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
    createElement(Path, {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z","key":"0"}),
    createElement(Path, {"d":"M7.391 10.32L11.145 16.57C11.531 17.219 12.469 17.219 12.859 16.57L16.609 10.32C17.086 9.52 16.316 8.563 15.438 8.855L12.316 9.895C12.113 9.965 11.887 9.965 11.684 9.895L8.566 8.855C7.684 8.563 6.914 9.52 7.391 10.32Z","key":"1"})
  );
});

NavigationDownCircle.displayName = 'NavigationDownCircle';

module.exports = NavigationDownCircle;
module.exports.NavigationDownCircle = NavigationDownCircle;
module.exports.default = NavigationDownCircle;
