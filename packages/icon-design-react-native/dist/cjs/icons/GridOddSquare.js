'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Rect } = RNSvg;

const GridOddSquare = forwardRef(function GridOddSquare(
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
    createElement(Circle, {"cx":"6.00000000018008","cy":"6.000000000446562","r":"4","key":"0"}),
    createElement(Circle, {"cx":"18.00000000018008","cy":"18.000000000447017","r":"3.999999999999773","key":"1"}),
    createElement(Rect, {"x":"14.00000000018008","y":"2.000000000446562","width":"8","height":"8","key":"2"}),
    createElement(Circle, {"cx":"6.00000000018008","cy":"18.000000000447017","r":"3.999999999999773","key":"3"})
  );
});

GridOddSquare.displayName = 'GridOddSquare';

module.exports = GridOddSquare;
module.exports.GridOddSquare = GridOddSquare;
module.exports.default = GridOddSquare;
