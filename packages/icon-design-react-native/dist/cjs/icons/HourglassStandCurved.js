'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const HourglassStandCurved = forwardRef(function HourglassStandCurved(
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
    createElement(Path, {"d":"M6 22L6 18.906C6 18.316 6.176 17.738 6.504 17.242L8.891 13.664C9.563 12.656 9.563 11.344 8.891 10.336L6.504 6.758C6.176 6.262 6 5.684 6 5.094L6 2","key":"0"}),
    createElement(Path, {"d":"M19 22L5 22","key":"1"}),
    createElement(Path, {"d":"M18 2L18 5.094C18 5.684 17.824 6.262 17.496 6.758L15.109 10.336C14.438 11.344 14.438 12.656 15.109 13.664L17.496 17.242C17.824 17.738 18 18.316 18 18.906L18 22","key":"2"}),
    createElement(Path, {"d":"M5 2L19 2","key":"3"})
  );
});

HourglassStandCurved.displayName = 'HourglassStandCurved';

module.exports = HourglassStandCurved;
module.exports.HourglassStandCurved = HourglassStandCurved;
module.exports.default = HourglassStandCurved;
