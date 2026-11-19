'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const WindowSettingsBare = forwardRef(function WindowSettingsBare(
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
    createElement(Circle, {"cx":"16.00000000018008","cy":"16.000000000448381","r":"4","key":"0"}),
    createElement(Path, {"d":"M9.00000000018008,22.000000000456566l-5,.000000000002728c-1.104569499659192,0-2-.89543050033717-2-2V4.000000000456566c0-1.104569499661011.895430500340808-1.999999999997272,2-1.999999999997272l16-.000000000002728c1.104569499659192,0,2,.895430500338989,2,2v4.999999999991815","key":"1"}),
    createElement(Line, {"x1":"16.00000000018008","y1":"16.010000000456785","x2":"16.00000000018008","y2":"16.000000000456566","key":"2"}),
    createElement(Line, {"x1":"16.00000000018008","y1":"12.000000000448381","x2":"16.00000000018008","y2":"10.000000000448381","key":"3"}),
    createElement(Line, {"x1":"16.00000000018008","y1":"22.000000000448381","x2":"16.00000000018008","y2":"20.000000000448381","key":"4"}),
    createElement(Line, {"x1":"20.00000000018008","y1":"16.000000000448381","x2":"22.00000000018008","y2":"16.000000000448381","key":"5"}),
    createElement(Line, {"x1":"10.00000000018008","y1":"16.000000000448381","x2":"12.00000000018008","y2":"16.000000000448381","key":"6"}),
    createElement(Line, {"x1":"18.828427124859445","y1":"13.171572875640777","x2":"20.242640687210951","y2":"11.757359313233792","key":"7"}),
    createElement(Line, {"x1":"11.757359313171037","y1":"20.24264068766297","x2":"13.17157287550981","y2":"18.828427125258713","key":"8"}),
    createElement(Line, {"x1":"18.828427124999507","y1":"18.828427125129565","x2":"20.24264068741104","y2":"20.242640687471976","key":"9"}),
    createElement(Line, {"x1":"11.757359312970948","y1":"11.757359313422967","x2":"13.171572875369748","y2":"13.171572875765378","key":"10"}),
    createElement(Line, {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"11"}),
    createElement(Line, {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"12"}),
    createElement(Line, {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"13"})
  );
});

WindowSettingsBare.displayName = 'WindowSettingsBare';

module.exports = WindowSettingsBare;
module.exports.WindowSettingsBare = WindowSettingsBare;
module.exports.default = WindowSettingsBare;
