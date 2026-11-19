'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkCircleArrowLeftBracket = forwardRef(function LinkCircleArrowLeftBracket(
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
    createElement(Path, {"d":"M14 12L10 12","key":"0"}),
    createElement(Path, {"d":"M14 15L15 15C16.656 15 18 13.656 18 12C18 10.344 16.656 9 15 9L14 9","key":"1"}),
    createElement(Path, {"d":"M10 9L9 9C7.344 9 6 10.344 6 12C6 13.656 7.344 15 9 15L10 15","key":"2"}),
    createElement(Path, {"d":"M18 18L16 20L18 22","key":"3"}),
    createElement(Path, {"d":"M22 20L16 20","key":"4"}),
    createElement(Path, {"d":"M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 13.047 21.84 14.055 21.539 15","key":"5"})
  );
});

LinkCircleArrowLeftBracket.displayName = 'LinkCircleArrowLeftBracket';

module.exports = LinkCircleArrowLeftBracket;
module.exports.LinkCircleArrowLeftBracket = LinkCircleArrowLeftBracket;
module.exports.default = LinkCircleArrowLeftBracket;
