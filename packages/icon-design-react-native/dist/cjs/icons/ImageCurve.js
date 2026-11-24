'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path, Rect } = RNSvg;

const ImageCurve = forwardRef(function ImageCurve(
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
    createElement(Rect, {"x":"1.999999993269739","y":"2.998779299956368","width":"20","height":"18","rx":"1.000000000002264","ry":"1.000000000002264","transform":"translate(23.9999999860011 23.997558600451168) rotate(-180)","key":"0"}),
    createElement(Path, {"d":"M21.999999993269739,9.299987796050118c-5.877075195308862,1.193115234375-10.505676269529431,5.82171630859375-11.698791503909888,11.69879150390625","key":"1"}),
    createElement(Circle, {"cx":"8.499999993269739","cy":"9.498779299956368","r":"2.5","key":"2"})
  );
});

ImageCurve.displayName = 'ImageCurve';

module.exports = ImageCurve;
module.exports.ImageCurve = ImageCurve;
module.exports.default = ImageCurve;
