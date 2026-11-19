'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const AnchorCircleBarbed = forwardRef(function AnchorCircleBarbed(
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
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement(Path, {"d":"M16 13L18 12C18 15.313 15.313 18 12 18C8.688 18 6 15.313 6 12L8 13","key":"1"}),
    createElement(Path, {"d":"M13.5 7.5C13.5 8.328 12.828 9 12 9C11.172 9 10.5 8.328 10.5 7.5C10.5 6.672 11.172 6 12 6C12.828 6 13.5 6.672 13.5 7.5Z","key":"2"}),
    createElement(Path, {"d":"M12 9L12 18","key":"3"})
  );
});

AnchorCircleBarbed.displayName = 'AnchorCircleBarbed';

module.exports = AnchorCircleBarbed;
module.exports.AnchorCircleBarbed = AnchorCircleBarbed;
module.exports.default = AnchorCircleBarbed;
