'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GaugeDots = forwardRef(function GaugeDots(
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
    createElement(Path, {"d":"M10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12Z","key":"0"}),
    createElement(Path, {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"1"}),
    createElement(Path, {"d":"M16.5 7.5L13.414 10.586","key":"2"}),
    createElement(Path, {"d":"M12 6L12 6","key":"3"}),
    createElement(Path, {"d":"M7.758 7.758L7.758 7.758","key":"4"}),
    createElement(Path, {"d":"M16.242 16.242L16.242 16.242","key":"5"}),
    createElement(Path, {"d":"M7.758 16.242L7.758 16.242","key":"6"}),
    createElement(Path, {"d":"M6 12L6 12","key":"7"}),
    createElement(Path, {"d":"M18 12L18 12","key":"8"})
  );
});

GaugeDots.displayName = 'GaugeDots';

module.exports = GaugeDots;
module.exports.GaugeDots = GaugeDots;
module.exports.default = GaugeDots;
