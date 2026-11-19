'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpCircleDashedLong = forwardRef(function ArrowUpCircleDashedLong(
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
    createElement(Path, {"d":"M9 11L12 8L15 11","key":"0"}),
    createElement(Path, {"d":"M12 16L12 8","key":"1"}),
    createElement(Path, {"d":"M14 2.199C13.355 2.07 12.684 2 12 2C11.316 2 10.645 2.07 10 2.199","key":"2"}),
    createElement(Path, {"d":"M10 21.801C10.645 21.93 11.316 22 12 22C12.684 22 13.355 21.93 14 21.801","key":"3"}),
    createElement(Path, {"d":"M6.484 3.656C5.934 4.02 5.414 4.445 4.93 4.93C4.445 5.414 4.02 5.938 3.656 6.484","key":"4"}),
    createElement(Path, {"d":"M17.516 20.344C18.066 19.98 18.586 19.555 19.07 19.07C19.555 18.586 19.98 18.063 20.344 17.516","key":"5"}),
    createElement(Path, {"d":"M2.199 10C2.07 10.645 2 11.316 2 12C2 12.684 2.07 13.355 2.199 14","key":"6"}),
    createElement(Path, {"d":"M21.801 14C21.93 13.355 22 12.684 22 12C22 11.316 21.93 10.645 21.801 10","key":"7"}),
    createElement(Path, {"d":"M3.656 17.516C4.02 18.066 4.445 18.586 4.93 19.07C5.414 19.555 5.938 19.98 6.484 20.344","key":"8"}),
    createElement(Path, {"d":"M20.344 6.484C19.98 5.934 19.555 5.414 19.07 4.93C18.586 4.445 18.063 4.02 17.516 3.656","key":"9"})
  );
});

ArrowUpCircleDashedLong.displayName = 'ArrowUpCircleDashedLong';

module.exports = ArrowUpCircleDashedLong;
module.exports.ArrowUpCircleDashedLong = ArrowUpCircleDashedLong;
module.exports.default = ArrowUpCircleDashedLong;
