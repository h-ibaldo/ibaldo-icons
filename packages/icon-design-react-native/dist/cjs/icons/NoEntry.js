'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Rect } = RNSvg;

const NoEntry = forwardRef(function NoEntry(
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
    createElement(Circle, {"cx":"12.025268548975873","cy":"11.997565476121054","r":"10","key":"0"}),
    createElement(Rect, {"x":"6.025268548975873","y":"9.997565476121054","width":"12","height":"4","key":"1"})
  );
});

NoEntry.displayName = 'NoEntry';

module.exports = NoEntry;
module.exports.NoEntry = NoEntry;
module.exports.default = NoEntry;
