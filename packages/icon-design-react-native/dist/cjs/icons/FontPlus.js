'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const FontPlus = forwardRef(function FontPlus(
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
    createElement(Circle, {"cx":"16.999999980991561","cy":"16.997562035418014","r":"5","key":"0"}),
    createElement(Line, {"x1":"14.999999980991561","y1":"16.997562035418014","x2":"18.999999980991561","y2":"16.997562035418014","key":"1"}),
    createElement(Line, {"x1":"16.999999980991561","y1":"14.997562035418014","x2":"16.999999980991561","y2":"18.997562035418014","key":"2"}),
    createElement(Line, {"x1":"3.999999980991561","y1":"16.997562035418014","x2":"8.999999980991561","y2":"16.997562035418014","key":"3"}),
    createElement(Polyline, {"points":"13.368408184122018 9.997562035418014 9.999999980991561 1.997562035418014 1.999999980991561 20.997562035418014","key":"4"})
  );
});

FontPlus.displayName = 'FontPlus';

module.exports = FontPlus;
module.exports.FontPlus = FontPlus;
module.exports.default = FontPlus;
