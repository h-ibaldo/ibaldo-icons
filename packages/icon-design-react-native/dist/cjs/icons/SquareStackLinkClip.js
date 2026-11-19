'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SquareStackLinkClip = forwardRef(function SquareStackLinkClip(
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
    createElement(Path, {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L17 2","key":"0"}),
    createElement(Path, {"d":"M17.172 14.828C18.277 13.723 18.277 11.934 17.172 10.828C16.066 9.723 14.277 9.723 13.172 10.828","key":"1"}),
    createElement(Path, {"d":"M10.828 13.172C9.723 14.277 9.723 16.066 10.828 17.172C11.934 18.277 13.723 18.277 14.828 17.172","key":"2"}),
    createElement(Path, {"d":"M13.328 14.672L14.672 13.328","key":"3"}),
    createElement(Path, {"d":"M20 22L8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L20 6C21.105 6 22 6.895 22 8L22 20C22 21.105 21.105 22 20 22Z","key":"4"})
  );
});

SquareStackLinkClip.displayName = 'SquareStackLinkClip';

module.exports = SquareStackLinkClip;
module.exports.SquareStackLinkClip = SquareStackLinkClip;
module.exports.default = SquareStackLinkClip;
