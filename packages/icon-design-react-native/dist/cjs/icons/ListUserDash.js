'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListUserDash = forwardRef(function ListUserDash(
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
    createElement(Path, {"d":"M20 15C20 16.656 18.656 18 17 18C15.344 18 14 16.656 14 15C14 13.344 15.344 12 17 12C18.656 12 20 13.344 20 15Z","key":"0"}),
    createElement(Path, {"d":"M22 22L22 20C22 18.895 21.105 18 20 18L14 18C12.895 18 12 18.895 12 20L12 22","key":"1"}),
    createElement(Path, {"d":"M8 4L14 4","key":"2"}),
    createElement(Path, {"d":"M8 9L14 9","key":"3"}),
    createElement(Path, {"d":"M3 4L4 4","key":"4"}),
    createElement(Path, {"d":"M3 9L4 9","key":"5"}),
    createElement(Path, {"d":"M8 14L10 14","key":"6"}),
    createElement(Path, {"d":"M3 14L4 14","key":"7"})
  );
});

ListUserDash.displayName = 'ListUserDash';

module.exports = ListUserDash;
module.exports.ListUserDash = ListUserDash;
module.exports.default = ListUserDash;
