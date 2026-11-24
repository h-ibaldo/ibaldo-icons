'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path, Polyline } = RNSvg;

const AccessibilityCircleSettings = forwardRef(function AccessibilityCircleSettings(
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
    createElement(Circle, {"cx":"11.025268548970416","cy":"6.997565476121054","r":"1","key":"0"}),
    createElement(Polyline, {"points":"7.025268548970416 8.99756547607376 10.025268548970416 10.99756547607376 12.025268548970416 10.99756547607376 15.025268548970416 8.99756547607376","key":"1"}),
    createElement(Polyline, {"points":"10.025268548970416 10.99756547607376 10.025268548970416 12.99756547607376 8.025268548970416 15.997565476121054","key":"2"}),
    createElement(Circle, {"cx":"18.025268548969507","cy":"17.997565476121281","r":"1.999999999997196","key":"3"}),
    createElement(Line, {"x1":"19.025268548939493","y1":"19.729616283703763","x2":"20.025268548919485","y2":"21.461667091286472","key":"4"}),
    createElement(Line, {"x1":"16.025268549019529","y1":"14.533463860951997","x2":"17.02526854899952","y2":"16.265514668534706","key":"5"}),
    createElement(Line, {"x1":"20.025268548970416","y1":"17.997565476212003","x2":"22.025268548970416","y2":"17.997565476299314","key":"6"}),
    createElement(Line, {"x1":"14.025268548970416","y1":"17.997565475942793","x2":"16.025268548970416","y2":"17.997565476030104","key":"7"}),
    createElement(Line, {"x1":"19.025268549099565","y1":"16.265514668625656","x2":"20.025268549230532","y2":"14.533463861130258","key":"8"}),
    createElement(Line, {"x1":"16.025268548710301","y1":"21.461667091108211","x2":"17.025268548839449","y2":"19.729616283616451","key":"9"}),
    createElement(Line, {"x1":"10.025268548970416","y1":"12.99756547607376","x2":"12.025268548970416","y2":"12.997565476121054","key":"10"}),
    createElement(Path, {"d":"M20.025268548970416,10.997565476121054c0-4.9705810546875-4.029296875-9-9-9S2.025268548970416,6.026984421433554,2.025268548970416,10.997565476121054c0,4.97052001953125,4.029296875,9,9,9","key":"11"}),
    createElement(Polyline, {"points":"12.025268548970416 10.997565476121054 12.025268548970416 12.997565476121054 13.358520502099964 14.997565476121054","key":"12"})
  );
});

AccessibilityCircleSettings.displayName = 'AccessibilityCircleSettings';

module.exports = AccessibilityCircleSettings;
module.exports.AccessibilityCircleSettings = AccessibilityCircleSettings;
module.exports.default = AccessibilityCircleSettings;
