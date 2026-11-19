'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const AtEqual = forwardRef(function AtEqual(
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
    createElement(Circle, {"cx":"13.041899010609995","cy":"13.056394887040369","r":"4","key":"0"}),
    createElement(Path, {"d":"M13.041899010609995,4.056394887444185c4.970581054689319-.000000000221917,9.00000000018008,4.029418944908684,9.000000000409273,8.999999999596184","key":"1"}),
    createElement(Line, {"x1":"13.041899010609995","y1":"22.056394887040369","x2":"18.041899010609995","y2":"22.056394887040369","key":"2"}),
    createElement(Line, {"x1":"2.067167566010539","y1":"2.056394887018541","x2":"6.067167566010539","y2":"2.056394887018541","key":"3"}),
    createElement(Line, {"x1":"2.041899011019268","y1":"6.05639488703855","x2":"6.041899011019268","y2":"6.05639488703855","key":"4"}),
    createElement(Path, {"d":"M13.041899011019268,4.056394887040369c-1.0537109375,0-2.060546875.1904296875-3,.5230712890625","key":"5"}),
    createElement(Path, {"d":"M4.564848229769268,10.056394887040369c-.33251953125.9395751953125-.52294921875,1.9464111328125-.52294921875,3,0,4.9705810546875,4.029296875,9,9,9","key":"6"}),
    createElement(Path, {"d":"M22.067167566010539,13.056394882200038v1.500002499999027c0,1.38071049386599-1.119287006129525,2.499997500000973-2.499997500000973,2.499997500000973h-.000004999999874c-1.380710493858714,0-2.499997499999154-1.119287006134982-2.499997499999154-2.499997500000973v-1.500002499999027","key":"7"})
  );
});

AtEqual.displayName = 'AtEqual';

module.exports = AtEqual;
module.exports.AtEqual = AtEqual;
module.exports.default = AtEqual;
