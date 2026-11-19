'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowLeftCircleIn = forwardRef(function ArrowLeftCircleIn(
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
    createElement(Path, {"d":"M12 9L9 12L12 15","key":"0"}),
    createElement(Path, {"d":"M22 12L9 12","key":"1"}),
    createElement(Path, {"d":"M20.648 17C18.918 19.984 15.699 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C15.699 2 18.918 4.016 20.648 7","key":"2"})
  );
});

ArrowLeftCircleIn.displayName = 'ArrowLeftCircleIn';

module.exports = ArrowLeftCircleIn;
module.exports.ArrowLeftCircleIn = ArrowLeftCircleIn;
module.exports.default = ArrowLeftCircleIn;
