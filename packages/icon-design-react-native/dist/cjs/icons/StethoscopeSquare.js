'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path, Rect } = RNSvg;

const StethoscopeSquare = forwardRef(function StethoscopeSquare(
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
    createElement(Rect, {"x":"2.025268554610193","y":"2.000000000709406","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement(Circle, {"cx":"7.025268554610193","cy":"7.000000000705768","r":"1","key":"1"}),
    createElement(Circle, {"cx":"13.025268554610193","cy":"7.000000000705768","r":"1","key":"2"}),
    createElement(Circle, {"cx":"18.025268554610193","cy":"14.000000000709406","r":"1","key":"3"}),
    createElement(Path, {"d":"M10.025268554610193,13.000000000709406v2c0,1.656854249489697,1.343145750509393,3,3,3h2.000002999960088c1.656852592639552,0,2.999997000039912-1.343144416809082,2.999997000039912-2.999997000002622v-.000002999997378","key":"4"}),
    createElement(Path, {"d":"M6.025268554610193,7.000000000709406v3c0,1.656854249489697,1.343145750509393,3,3,3h2c1.656854249479693,0,3-1.343145750510303,3-3v-3","key":"5"})
  );
});

StethoscopeSquare.displayName = 'StethoscopeSquare';

module.exports = StethoscopeSquare;
module.exports.StethoscopeSquare = StethoscopeSquare;
module.exports.default = StethoscopeSquare;
