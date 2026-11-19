'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownCircleDashedHalfRight = forwardRef(function ArrowDownCircleDashedHalfRight(
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
    createElement(Path, {"d":"M14 2.199C13.355 2.07 12.684 2 12 2C11.316 2 10.645 2.07 10 2.199","key":"0"}),
    createElement(Path, {"d":"M17.516 20.344C18.066 19.98 18.586 19.555 19.07 19.07C19.555 18.586 19.98 18.063 20.344 17.516","key":"1"}),
    createElement(Path, {"d":"M21.797 14C21.93 13.355 22 12.684 22 12C22 11.316 21.93 10.645 21.797 10","key":"2"}),
    createElement(Path, {"d":"M20.344 6.484C19.98 5.934 19.555 5.414 19.07 4.93C18.586 4.445 18.066 4.02 17.516 3.656","key":"3"}),
    createElement(Path, {"d":"M15 13L12 16L9 13","key":"4"}),
    createElement(Path, {"d":"M12 8L12 16","key":"5"}),
    createElement(Path, {"d":"M6.484 3.66C3.785 5.449 2 8.516 2 12C2 17.523 6.477 22 12 22C12.684 22 13.352 21.93 14 21.801","key":"6"})
  );
});

ArrowDownCircleDashedHalfRight.displayName = 'ArrowDownCircleDashedHalfRight';

module.exports = ArrowDownCircleDashedHalfRight;
module.exports.ArrowDownCircleDashedHalfRight = ArrowDownCircleDashedHalfRight;
module.exports.default = ArrowDownCircleDashedHalfRight;
