'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Ellipse, Line, Path, Polyline } = RNSvg;

const BanknoteSearch2 = forwardRef(function BanknoteSearch2(
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
    createElement(Polyline, {"points":"10.999999993462552 13.998779299956368 1.999999993462552 13.998779299956368 1.999999993462552 1.998779299956368 17.999999993462552 1.998779299956368 17.999999993462552 8.498779299956368","key":"0"}),
    createElement(Path, {"d":"M13.999999993642632,1.998779299956368c0,2.209138999198331,1.79086100071072,4,3.99999999981992,4","key":"1"}),
    createElement(Path, {"d":"M1.999999993462552,5.998779299956368c2.209138999300194,0,4.00000000018008-1.790861000801669,4.00000000018008-4","key":"2"}),
    createElement(Path, {"d":"M6.000001379103196,13.998777567903744c.000000000190994-2.20913804241718-1.790861621029762-3.999998267750925-4.000001385760697-3.999998267947376","key":"3"}),
    createElement(Ellipse, {"cx":"9.999999993640358","cy":"7.998779299956368","rx":"2.000000000006821","ry":"3","key":"4"}),
    createElement(Circle, {"cx":"17.999999993642632","cy":"15.998779299956368","r":"4","key":"5"}),
    createElement(Line, {"x1":"15.171569817863201","y1":"18.827209475737618","x2":"11.999999993642632","y2":"21.998779299956368","key":"6"})
  );
});

BanknoteSearch2.displayName = 'BanknoteSearch2';

module.exports = BanknoteSearch2;
module.exports.BanknoteSearch2 = BanknoteSearch2;
module.exports.default = BanknoteSearch2;
