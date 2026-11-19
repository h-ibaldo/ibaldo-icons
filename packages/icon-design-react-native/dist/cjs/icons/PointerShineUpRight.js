'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PointerShineUpRight = forwardRef(function PointerShineUpRight(
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
    createElement(Path, {"d":"M15.949 9.23L11.906 21.363C11.652 22.117 10.633 22.23 10.223 21.547L7.309 16.691L2.453 13.777C1.77 13.367 1.883 12.344 2.637 12.094L14.77 8.051C15.5 7.805 16.191 8.5 15.949 9.23Z","key":"0"}),
    createElement(Path, {"d":"M15 2L15 3","key":"1"}),
    createElement(Path, {"d":"M22 9L21 9","key":"2"}),
    createElement(Path, {"d":"M19.949 4.051L19.242 4.758","key":"3"}),
    createElement(Path, {"d":"M19.949 13.949L19.242 13.242","key":"4"}),
    createElement(Path, {"d":"M10.758 4.758L10.051 4.051","key":"5"})
  );
});

PointerShineUpRight.displayName = 'PointerShineUpRight';

module.exports = PointerShineUpRight;
module.exports.PointerShineUpRight = PointerShineUpRight;
module.exports.default = PointerShineUpRight;
