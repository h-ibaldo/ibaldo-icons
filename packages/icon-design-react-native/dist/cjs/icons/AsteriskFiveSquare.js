'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const AsteriskFiveSquare = forwardRef(function AsteriskFiveSquare(
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
    createElement(Path, {"d":"M12 11.91L12 6.992","key":"0"}),
    createElement(Path, {"d":"M12 11.91L9.07 16.008","key":"1"}),
    createElement(Path, {"d":"M12 11.91L7.262 10.438","key":"2"}),
    createElement(Path, {"d":"M12 11.91L14.93 16.008","key":"3"}),
    createElement(Path, {"d":"M12 11.91L16.738 10.438","key":"4"}),
    createElement(Path, {"d":"M17 2L7 2C4.238 2 2 4.238 2 7L2 17C2 19.762 4.238 22 7 22L17 22C19.762 22 22 19.762 22 17L22 7C22 4.238 19.762 2 17 2Z","key":"5"})
  );
});

AsteriskFiveSquare.displayName = 'AsteriskFiveSquare';

module.exports = AsteriskFiveSquare;
module.exports.AsteriskFiveSquare = AsteriskFiveSquare;
module.exports.default = AsteriskFiveSquare;
