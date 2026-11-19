'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const Scanner = forwardRef(function Scanner(
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
    createElement(Rect, {"x":"1.999999981189831","y":"12.999996564258254","width":"20","height":"6","key":"0"}),
    createElement(Path, {"d":"M20.999999981180736,18.999996564258254v2c0,.552284749828686-.503679656439999,1-1.125,1H4.124999981189831c-.621320343560001,0-1.125-.447715250171314-1.125-1v-2","key":"1"}),
    createElement(Line, {"x1":"4.999999981189831","y1":"15.999996564258254","x2":"5.999999981189831","y2":"15.999996564258254","key":"2"}),
    createElement(Line, {"x1":"5.999999981189831","y1":"1.999996564258254","x2":"21.999999981189831","y2":"12.999996564258254","key":"3"})
  );
});

Scanner.displayName = 'Scanner';

module.exports = Scanner;
module.exports.Scanner = Scanner;
module.exports.default = Scanner;
