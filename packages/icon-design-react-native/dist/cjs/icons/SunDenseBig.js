'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const SunDenseBig = forwardRef(function SunDenseBig(
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
    createElement(Circle, {"cx":"12","cy":"11.999999999998636","r":"4.999999999999773","key":"0"}),
    createElement(Line, {"x1":"22","y1":"12.000000000447471","x2":"20","y2":"12.000000000358341","key":"1"}),
    createElement(Line, {"x1":"4","y1":"11.99999999963984","x2":"2","y2":"11.99999999955071","key":"2"}),
    createElement(Line, {"x1":"17.000000000649379","y1":"3.339745962523011","x2":"16.00000000052205","y2":"5.071796770018409","key":"3"}),
    createElement(Line, {"x1":"7.99999999947795","y1":"18.928203229970677","x2":"6.999999999350621","y2":"20.660254037464256","key":"4"}),
    createElement(Line, {"x1":"7.000000000907676","y1":"3.33974596162443","x2":"8.000000000722139","y2":"5.071796769299908","key":"5"}),
    createElement(Line, {"x1":"15.999999999268766","y1":"18.928203230689178","x2":"16.999999999092324","y2":"20.660254038364656","key":"6"}),
    createElement(Line, {"x1":"20.660254038144558","y1":"7.000000000516593","x2":"18.928203230520012","y2":"8.000000000409273","key":"7"}),
    createElement(Line, {"x1":"5.071796769490902","y1":"15.999999999587089","x2":"3.339745961855442","y2":"16.999999999481588","key":"8"}),
    createElement(Line, {"x1":"12.000000000898581","y1":"1.999999999998181","x2":"12.000000000718501","y2":"3.999999999998181","key":"9"}),
    createElement(Line, {"x1":"11.999999999281499","y1":"19.999999999998181","x2":"11.999999999101419","y2":"21.999999999998181","key":"10"}),
    createElement(Line, {"x1":"3.339745962754023","y1":"6.999999998961357","x2":"5.071796770198489","y2":"7.999999999166903","key":"11"}),
    createElement(Line, {"x1":"18.928203229801511","y1":"16.000000000829459","x2":"20.660254037245977","y2":"17.000000001027729","key":"12"})
  );
});

SunDenseBig.displayName = 'SunDenseBig';

module.exports = SunDenseBig;
module.exports.SunDenseBig = SunDenseBig;
module.exports.default = SunDenseBig;
