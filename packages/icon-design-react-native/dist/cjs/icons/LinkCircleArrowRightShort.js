'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkCircleArrowRightShort = forwardRef(function LinkCircleArrowRightShort(
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
    createElement(Path, {"d":"M6 18L8 20L6 22","key":"0"}),
    createElement(Path, {"d":"M2 20L8 20","key":"1"}),
    createElement(Path, {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.047 2.16 14.055 2.461 15","key":"2"}),
    createElement(Path, {"d":"M8.828 12.828C7.723 11.723 7.723 9.934 8.828 8.828C9.934 7.723 11.723 7.723 12.828 8.828","key":"3"}),
    createElement(Path, {"d":"M15.172 11.172C16.277 12.277 16.277 14.066 15.172 15.172C14.066 16.277 12.277 16.277 11.172 15.172","key":"4"}),
    createElement(Path, {"d":"M12.672 12.672L11.328 11.328","key":"5"})
  );
});

LinkCircleArrowRightShort.displayName = 'LinkCircleArrowRightShort';

module.exports = LinkCircleArrowRightShort;
module.exports.LinkCircleArrowRightShort = LinkCircleArrowRightShort;
module.exports.default = LinkCircleArrowRightShort;
