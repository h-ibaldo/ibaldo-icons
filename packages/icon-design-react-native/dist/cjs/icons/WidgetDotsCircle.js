'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const WidgetDotsCircle = forwardRef(function WidgetDotsCircle(
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
    createElement(Path, {"d":"M11 11L11 11","key":"0"}),
    createElement(Path, {"d":"M14 11L14 11","key":"1"}),
    createElement(Path, {"d":"M17 11L17 11","key":"2"}),
    createElement(Path, {"d":"M21.164 8L10 8C8.895 8 8 8.895 8 10L8 21.16","key":"3"}),
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"4"}),
    createElement(Path, {"d":"M21.801 14L8 14L8 21.16","key":"5"})
  );
});

WidgetDotsCircle.displayName = 'WidgetDotsCircle';

module.exports = WidgetDotsCircle;
module.exports.WidgetDotsCircle = WidgetDotsCircle;
module.exports.default = WidgetDotsCircle;
