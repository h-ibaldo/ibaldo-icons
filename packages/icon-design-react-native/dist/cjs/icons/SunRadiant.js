'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const SunRadiant = forwardRef(function SunRadiant(
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
    createElement(Circle, {"cx":"12","cy":"11.999999999998181","r":"4","key":"0"}),
    createElement(Line, {"x1":"12","y1":"21.999999999998181","x2":"12","y2":"19.999999999998181","key":"1"}),
    createElement(Line, {"x1":"12","y1":"3.999999999998181","x2":"12","y2":"1.999999999998181","key":"2"}),
    createElement(Line, {"x1":"2","y1":"11.999999999998181","x2":"4","y2":"11.999999999998181","key":"3"}),
    createElement(Line, {"x1":"20","y1":"11.999999999998181","x2":"22","y2":"11.999999999998181","key":"4"}),
    createElement(Line, {"x1":"4.928932188289764","y1":"19.071067812028559","x2":"6.343145750630356","y2":"17.656854249618846","key":"5"}),
    createElement(Line, {"x1":"17.656854249369644","y1":"6.343145750379335","x2":"19.071067811710236","y2":"4.928932187978717","key":"6"}),
    createElement(Line, {"x1":"4.928932187980536","y1":"4.928932188289764","x2":"6.343145750379335","y2":"6.343145750637632","key":"7"}),
    createElement(Line, {"x1":"17.656854249620665","y1":"17.65685424935873","x2":"19.071067812019464","y2":"19.071067811708417","key":"8"}),
    createElement(Line, {"x1":"15.826834323550429","y1":"21.238795325158208","x2":"15.061467458839616","y2":"19.391036260129113","key":"9"}),
    createElement(Line, {"x1":"8.938532541160384","y1":"4.608963739869068","x2":"8.173165676449571","y2":"2.761204674838154","key":"10"}),
    createElement(Line, {"x1":"2.761204674839973","y1":"15.82683432354861","x2":"4.608963739869068","y2":"15.061467458839616","key":"11"}),
    createElement(Line, {"x1":"19.391036260120018","y1":"8.938532541158565","x2":"21.238795325160027","y2":"8.173165676449571","key":"12"}),
    createElement(Line, {"x1":"8.173165676449571","y1":"21.238795325158208","x2":"8.938532541160384","y2":"19.391036260129113","key":"13"}),
    createElement(Line, {"x1":"15.061467458839616","y1":"4.608963739878163","x2":"15.826834323550429","y2":"2.761204674838154","key":"14"}),
    createElement(Line, {"x1":"2.761204674839973","y1":"8.173165676449571","x2":"4.608963739879982","y2":"8.938532541158565","key":"15"}),
    createElement(Line, {"x1":"19.391036260120018","y1":"15.061467458839616","x2":"21.238795325149113","y2":"15.82683432354861","key":"16"})
  );
});

SunRadiant.displayName = 'SunRadiant';

module.exports = SunRadiant;
module.exports.SunRadiant = SunRadiant;
module.exports.default = SunRadiant;
