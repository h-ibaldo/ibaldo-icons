'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkCircleArrowRightBracket = forwardRef(function LinkCircleArrowRightBracket(
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
    createElement(Path, {"d":"M10 12L14 12","key":"0"}),
    createElement(Path, {"d":"M10 15L9 15C7.344 15 6 13.656 6 12C6 10.344 7.344 9 9 9L10 9","key":"1"}),
    createElement(Path, {"d":"M14 9L15 9C16.656 9 18 10.344 18 12C18 13.656 16.656 15 15 15L14 15","key":"2"}),
    createElement(Path, {"d":"M6 18L8 20L6 22","key":"3"}),
    createElement(Path, {"d":"M2 20L8 20","key":"4"}),
    createElement(Path, {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.047 2.16 14.055 2.461 15","key":"5"})
  );
});

LinkCircleArrowRightBracket.displayName = 'LinkCircleArrowRightBracket';

module.exports = LinkCircleArrowRightBracket;
module.exports.LinkCircleArrowRightBracket = LinkCircleArrowRightBracket;
module.exports.default = LinkCircleArrowRightBracket;
