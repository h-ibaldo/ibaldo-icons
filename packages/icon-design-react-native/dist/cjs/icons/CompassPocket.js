'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CompassPocket = forwardRef(function CompassPocket(
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
    createElement(Path, {"d":"M20 14C20 18.418 16.418 22 12 22C7.582 22 4 18.418 4 14C4 9.582 7.582 6 12 6C16.418 6 20 9.582 20 14Z","key":"0"}),
    createElement(Path, {"d":"M14 4C14 5.105 13.105 6 12 6C10.895 6 10 5.105 10 4C10 2.895 10.895 2 12 2C13.105 2 14 2.895 14 4Z","key":"1"}),
    createElement(Path, {"d":"M13 14C13 13.449 12.555 13 12 13C11.445 13 11 13.449 11 14C11 14.551 11.445 15 12 15C12.555 15 13 14.551 13 14Z","key":"2"}),
    createElement(Path, {"d":"M11.293 14.707L9 17","key":"3"}),
    createElement(Path, {"d":"M15 11L12.707 13.293","key":"4"})
  );
});

CompassPocket.displayName = 'CompassPocket';

module.exports = CompassPocket;
module.exports.CompassPocket = CompassPocket;
module.exports.default = CompassPocket;
