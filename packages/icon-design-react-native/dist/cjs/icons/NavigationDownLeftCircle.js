'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const NavigationDownLeftCircle = forwardRef(function NavigationDownLeftCircle(
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
    createElement(Path, {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement(Path, {"d":"M16.449 14.07L9.375 15.84C8.641 16.02 7.977 15.359 8.16 14.625L9.93 7.551C10.156 6.648 11.379 6.516 11.797 7.348L13.266 10.289C13.363 10.48 13.52 10.637 13.711 10.734L16.652 12.207C17.484 12.621 17.348 13.844 16.449 14.07Z","key":"1"})
  );
});

NavigationDownLeftCircle.displayName = 'NavigationDownLeftCircle';

module.exports = NavigationDownLeftCircle;
module.exports.NavigationDownLeftCircle = NavigationDownLeftCircle;
module.exports.default = NavigationDownLeftCircle;
