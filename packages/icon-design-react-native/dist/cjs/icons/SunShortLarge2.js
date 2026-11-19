'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const SunShortLarge2 = forwardRef(function SunShortLarge2(
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
    createElement(Circle, {"cx":"12","cy":"12.000000005924448","r":"6","key":"0"}),
    createElement(Line, {"x1":"12","y1":"2.000000005924448","x2":"12","y2":"3.000000005924448","key":"1"}),
    createElement(Line, {"x1":"12","y1":"21.000000005924448","x2":"12","y2":"22.000000005924448","key":"2"}),
    createElement(Line, {"x1":"22","y1":"12.000000005924448","x2":"21","y2":"12.000000005924448","key":"3"}),
    createElement(Line, {"x1":"3","y1":"12.000000005924448","x2":"2","y2":"12.000000005924448","key":"4"}),
    createElement(Line, {"x1":"19.071067811710236","y1":"4.928932193904984","x2":"18.36396103053994","y2":"5.636038975104384","key":"5"}),
    createElement(Line, {"x1":"5.63603896946006","y1":"18.363961036744513","x2":"4.928932188289764","y2":"19.071067817945732","key":"6"}),
    createElement(Line, {"x1":"19.071067812019464","y1":"19.071067817634685","x2":"18.363961030820064","y2":"18.363961036464389","key":"7"}),
    createElement(Line, {"x1":"5.636038969179936","y1":"5.636038975384508","x2":"4.928932187980536","y2":"4.928932194216031","key":"8"})
  );
});

SunShortLarge2.displayName = 'SunShortLarge2';

module.exports = SunShortLarge2;
module.exports.SunShortLarge2 = SunShortLarge2;
module.exports.default = SunShortLarge2;
