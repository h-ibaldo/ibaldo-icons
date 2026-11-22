'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const DistributeLeftRight = forwardRef(function DistributeLeftRight(
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
    createElement(Path, {"d":"M21 22L21 2","key":"0"}),
    createElement(Path, {"d":"M3 2L3 22","key":"1"}),
    createElement(Path, {"d":"M4 8L8 8C8.551 8 9 8.449 9 9L9 15C9 15.551 8.551 16 8 16L4 16C3.449 16 3 15.551 3 15L3 9C3 8.449 3.449 8 4 8Z","key":"2"}),
    createElement(Path, {"d":"M20 18L16 18C15.449 18 15 17.551 15 17L15 7C15 6.449 15.449 6 16 6L20 6C20.551 6 21 6.449 21 7L21 17C21 17.551 20.551 18 20 18Z","key":"3"})
  );
});

DistributeLeftRight.displayName = 'DistributeLeftRight';

module.exports = DistributeLeftRight;
module.exports.DistributeLeftRight = DistributeLeftRight;
module.exports.default = DistributeLeftRight;
