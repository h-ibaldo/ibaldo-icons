'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path, Polyline, Rect } = RNSvg;

const WheelchairSquare2 = forwardRef(function WheelchairSquare2(
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
    createElement(Circle, {"cx":"11.166625970845416","cy":"6.997565476121054","r":"1","key":"0"}),
    createElement(Rect, {"x":"2.166625970845416","y":"1.997565476121054","width":"20","height":"20.000000000003638","rx":"1.999999999999636","ry":"1.999999999999636","key":"1"}),
    createElement(Polyline, {"points":"11.166625970845416 6.997565476121054 11.166625970845416 12.997565476121054 15.166625970845416 12.997565476121054 17.166625970845416 16.997565476121054","key":"2"}),
    createElement(Line, {"x1":"11.166625970845416","y1":"9.997565476121054","x2":"15.166625970845416","y2":"9.997565476121054","key":"3"}),
    createElement(Path, {"d":"M11.166625970845416,9.997565476121054c-2.209228515619543,0-4,1.79083251953125-4,4,0,2.2091064453125,1.790771484380457,4,4,4,2.209228515630457,0,4-1.7908935546875,4-4,0-.347412109375-.05810546875-.6785888671875-.141357421869543-1","key":"4"})
  );
});

WheelchairSquare2.displayName = 'WheelchairSquare2';

module.exports = WheelchairSquare2;
module.exports.WheelchairSquare2 = WheelchairSquare2;
module.exports.default = WheelchairSquare2;
