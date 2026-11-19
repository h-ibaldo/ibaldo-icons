'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const UploadSquare = forwardRef(function UploadSquare(
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
    createElement(Rect, {"x":"1.974731450026411","y":"2.000000000459295","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement(Polyline, {"points":"8.974731450026411 9.000000000462023 11.974731450699437 6.000000000462023 14.974731450026411 9.000000000462023","key":"1"}),
    createElement(Line, {"x1":"11.974731448949569","y1":"14.000000000462023","x2":"11.974731450699437","y2":"6.000000000462023","key":"2"}),
    createElement(Line, {"x1":"6.974731450026411","y1":"18.000000000462023","x2":"16.974731450026411","y2":"18.000000000462023","key":"3"})
  );
});

UploadSquare.displayName = 'UploadSquare';

module.exports = UploadSquare;
module.exports.UploadSquare = UploadSquare;
module.exports.default = UploadSquare;
