'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Polyline, Rect } = RNSvg;

const ImagePeaks = forwardRef(function ImagePeaks(
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
    createElement(Rect, {"x":"1.999999993269739","y":"2.998779299956368","width":"20","height":"18","rx":"1.000000000002239","ry":"1.000000000002239","transform":"translate(23.9999999860011 23.997558600451168) rotate(-180)","key":"0"}),
    createElement(Polyline, {"points":"17.999999993269739 20.998779300134629 7.999999993269739 10.998779299956368 1.999999993049641 16.998779299505259","key":"1"}),
    createElement(Circle, {"cx":"13.999999993269739","cy":"8.998779299956368","r":"2","key":"2"}),
    createElement(Polyline, {"points":"21.999999993269739 18.998779299956368 16.999999993269739 13.998779299956368 13.999999993269739 16.998779299956368","key":"3"})
  );
});

ImagePeaks.displayName = 'ImagePeaks';

module.exports = ImagePeaks;
module.exports.ImagePeaks = ImagePeaks;
module.exports.default = ImagePeaks;
