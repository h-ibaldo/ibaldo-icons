'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const SunStarStripedSettings = forwardRef(function SunStarStripedSettings(
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
    createElement(Circle, {"cx":"16.999999990796823","cy":"17.000000000448381","r":"3.5","key":"0"}),
    createElement(Line, {"x1":"16.999999990796823","y1":"17.010000000448599","x2":"16.999999990796823","y2":"17.000000000448381","key":"1"}),
    createElement(Line, {"x1":"16.999999990796823","y1":"12.000000000448381","x2":"16.999999990796823","y2":"13.500000000448381","key":"2"}),
    createElement(Line, {"x1":"16.999999990796823","y1":"20.500000000448381","x2":"16.999999990796823","y2":"22.000000000448381","key":"3"}),
    createElement(Line, {"x1":"21.999999990796823","y1":"17.000000000448381","x2":"20.499999990796823","y2":"17.000000000448381","key":"4"}),
    createElement(Line, {"x1":"13.499999990796823","y1":"17.000000000448381","x2":"11.999999990796823","y2":"17.000000000448381","key":"5"}),
    createElement(Line, {"x1":"20.535533896808374","y1":"20.535533906298951","x2":"19.474873725005637","y2":"19.474873734544417","key":"6"}),
    createElement(Line, {"x1":"14.5251262565871","y1":"14.525126266351435","x2":"13.464466084788","y2":"13.464466094593263","key":"7"}),
    createElement(Line, {"x1":"13.464466084945343","y1":"20.535533906458113","x2":"14.525126256700787","y2":"19.474873734655375","key":"8"}),
    createElement(Line, {"x1":"19.474873724895588","y1":"14.525126266237748","x2":"20.535533896651941","y2":"13.464466094434101","key":"9"}),
    createElement(Line, {"x1":"9.999999990797733","y1":"14.000000000448381","x2":"4.999999990796823","y2":"19.000000000448381","key":"10"}),
    createElement(Line, {"x1":"6.999999990796823","y1":"5.000000000448381","x2":"4.999999990796823","y2":"7.000000000448381","key":"11"}),
    createElement(Line, {"x1":"11.999999990796823","y1":"4.000000000448381","x2":"2.999999990796823","y2":"13.000000000448381","key":"12"}),
    createElement(Line, {"x1":"11.999999990796823","y1":"8.000000000448381","x2":"4.999999990796823","y2":"15.000000000448381","key":"13"}),
    createElement(Polyline, {"points":"19.999999990796823 10.000000000448381 18.999999990796823 9.000000000448381 18.999999990796823 5.000000000448381 14.999999990796823 5.000000000448381 11.999999990796823 2.000000000448381 8.999999990796823 5.000000000448381 4.999999990796823 5.000000000448381 4.999999990796823 9.000000000448381 1.999999990796823 12.000000000448381 4.999999990796823 15.000000000448381 4.999999990796823 19.000000000448381 8.999999990796823 19.000000000448381 9.999999990796823 20.000000000448381","key":"14"})
  );
});

SunStarStripedSettings.displayName = 'SunStarStripedSettings';

module.exports = SunStarStripedSettings;
module.exports.SunStarStripedSettings = SunStarStripedSettings;
module.exports.default = SunStarStripedSettings;
