'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline, Rect } = RNSvg;

const WheelchairSquare3 = forwardRef(function WheelchairSquare3(
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
    createElement(Rect, {"x":"2.025268548975873","y":"1.997565476117416","width":"20","height":"20.000000000003638","rx":"1.999999999999636","ry":"1.999999999999636","key":"0"}),
    createElement(Circle, {"cx":"10.025268548975873","cy":"6.997565476121054","r":"1","key":"1"}),
    createElement(Circle, {"cx":"10.525268548975873","cy":"14.497565476121054","r":"3.5","key":"2"}),
    createElement(Polyline, {"points":"13.675659173975873 12.997565476121054 16.025268548975873 12.997565476121054 18.025268548975873 16.997565476121054","key":"3"}),
    createElement(Line, {"x1":"10.025268548975873","y1":"6.997565476121054","x2":"10.694702142725873","y2":"11.014655319871054","key":"4"}),
    createElement(Line, {"x1":"11.025268548975873","y1":"9.997565476121054","x2":"14.025268548975873","y2":"9.997565476121054","key":"5"})
  );
});

WheelchairSquare3.displayName = 'WheelchairSquare3';

module.exports = WheelchairSquare3;
module.exports.WheelchairSquare3 = WheelchairSquare3;
module.exports.default = WheelchairSquare3;
