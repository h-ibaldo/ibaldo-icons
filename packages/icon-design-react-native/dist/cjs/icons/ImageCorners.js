'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path, Polyline } = RNSvg;

const ImageCorners = forwardRef(function ImageCorners(
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
    createElement(Circle, {"cx":"17.016630450973025","cy":"7.000000000480213","r":"1","key":"0"}),
    createElement(Polyline, {"points":"5.016630450973025 18.000000000480213 10.016630450973025 10.000000000480213 15.016630450973025 18.000000000480213","key":"1"}),
    createElement(Polyline, {"points":"19.016630450973025 18.000000000480213 15.016630450973025 12.000000000480213 13.081144611129275 14.903198242667713","key":"2"}),
    createElement(Path, {"d":"M22.016630450703815,14.00000000316868l-.000000000538421,6c-.000000000100044,1.104568388793268-.895429611386135,1.999999999919964-1.999998000179403,1.999999999821739l-6.000002000000677-.000000000542059","key":"3"}),
    createElement(Path, {"d":"M14.016630451961646,2.000000002270099l5.999999999999091.000000000811269c1.104568388793268.000000000145519,1.999999999879037.895429611471627,1.99999999972988,1.999998000264895l-.000000000806722,6.000002000000677","key":"4"}),
    createElement(Path, {"d":"M2.016630452049867,10.000000000836735l.000000001077751-6c.00000000019827-1.104568388793268.895429611565305-1.999999999839929,1.999998000359483-1.99999999963984l6.000001999999768.000000001076842","key":"5"}),
    createElement(Path, {"d":"M10.016630449715194,22.000000002451998l-6-.000000001346052c-1.104568388792359-.000000000247383-1.999999999798092-.895429611653526-1.9999999995498-1.999998000446794l.000000001346052-6.000002000000677","key":"6"})
  );
});

ImageCorners.displayName = 'ImageCorners';

module.exports = ImageCorners;
module.exports.ImageCorners = ImageCorners;
module.exports.default = ImageCorners;
