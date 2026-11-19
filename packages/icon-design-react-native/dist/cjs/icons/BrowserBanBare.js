'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const BrowserBanBare = forwardRef(function BrowserBanBare(
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
    createElement(Path, {"d":"M9.999999993990059,21.998779299956368H3.999999993990059c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v6","key":"0"}),
    createElement(Line, {"x1":"5.989999993989841","y1":"5.998779299956368","x2":"5.999999993990059","y2":"5.998779299956368","key":"1"}),
    createElement(Line, {"x1":"8.989999993989841","y1":"5.998779299956368","x2":"8.999999993990059","y2":"5.998779299956368","key":"2"}),
    createElement(Line, {"x1":"18.999999993990059","y1":"5.998779299956368","x2":"11.999999993990059","y2":"5.998779299956368","key":"3"}),
    createElement(Circle, {"cx":"16.999999993995516","cy":"16.998779299957505","r":"5.000000000001648","key":"4"}),
    createElement(Line, {"x1":"20.535533896509151","y1":"13.46324539060879","x2":"13.464466084620653","y2":"20.53431320243908","key":"5"})
  );
});

BrowserBanBare.displayName = 'BrowserBanBare';

module.exports = BrowserBanBare;
module.exports.BrowserBanBare = BrowserBanBare;
module.exports.default = BrowserBanBare;
