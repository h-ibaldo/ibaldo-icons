'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const BoxLidClasp = forwardRef(function BoxLidClasp(
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
    createElement(Rect, {"x":"2","y":"2.999999999998181","width":"20","height":"5","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M21,7.999999999998181v12c0,.552284749830505-.503679656439999,1-1.125,1H4.125c-.621320343560001,0-1.125-.447715250169495-1.125-1V7.999999999998181","key":"1"}),
    createElement(Line, {"x1":"10","y1":"15.999999999998181","x2":"14","y2":"15.999999999998181","key":"2"}),
    createElement(Path, {"d":"M9,7.999999999998181l-.000000004929461,1c0,1.656854249400567,1.343145750599433,3,3,3,1.656854249399657,0,3-1.343145750599433,3-3l.000000004929461-1","key":"3"})
  );
});

BoxLidClasp.displayName = 'BoxLidClasp';

module.exports = BoxLidClasp;
module.exports.BoxLidClasp = BoxLidClasp;
module.exports.default = BoxLidClasp;
