'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileChartAxis = forwardRef(function FileChartAxis(
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
    createElement(Path, {"d":"M20 10L20 7.984C20 7.355 19.75 6.75 19.305 6.305L15.695 2.695C15.25 2.25 14.645 2 14.016 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L7 22","key":"0"}),
    createElement(Path, {"d":"M14 2L14 7C14 7.551 14.449 8 15 8L20 8","key":"1"}),
    createElement(Path, {"d":"M10 12L10 22L20 22","key":"2"}),
    createElement(Path, {"d":"M13 19L15 15L17 18L20 13","key":"3"})
  );
});

FileChartAxis.displayName = 'FileChartAxis';

module.exports = FileChartAxis;
module.exports.FileChartAxis = FileChartAxis;
module.exports.default = FileChartAxis;
