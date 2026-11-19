import { createElement, forwardRef } from 'react';
import Svg, { Circle, G, Line, Path, Polyline } from 'react-native-svg';

const AccessibilitySquareSettings = forwardRef(function AccessibilitySquareSettings(
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
    createElement(Path, {"d":"M11.025268548970416,19.997565476121054h-7c-1.104569499660101,0-2-.895430500338989-2-2V3.997565476121054c0-1.104569499661011.895430500339899-2,2-2h14c1.104569499659192,0,2,.895430500338989,2,2v7","key":"0"}),
    createElement(Circle, {"cx":"11.025268548970416","cy":"6.997565476121054","r":"1","key":"1"}),
    createElement(Polyline, {"points":"7.025268548970416 8.99756547607376 10.025268548970416 10.99756547607376 12.025268548970416 10.99756547607376 15.025268548970416 8.99756547607376","key":"2"}),
    createElement(Polyline, {"points":"10.025268548970416 10.99756547607376 10.025268548970416 12.99756547607376 8.025268548970416 15.997565476121054","key":"3"}),
    createElement(G, {"key":"4"},
      createElement(Circle, {"cx":"18.025268548969507","cy":"17.997565476121281","r":"1.999999999997196","key":"0"}),
      createElement(Line, {"x1":"19.025268548939493","y1":"19.729616283703763","x2":"20.025268548919485","y2":"21.461667091286472","key":"1"}),
      createElement(Line, {"x1":"16.025268549019529","y1":"14.533463860951997","x2":"17.02526854899952","y2":"16.265514668534706","key":"2"}),
      createElement(Line, {"x1":"20.025268548970416","y1":"17.997565476212003","x2":"22.025268548970416","y2":"17.997565476299314","key":"3"}),
      createElement(Line, {"x1":"14.025268548970416","y1":"17.997565475942793","x2":"16.025268548970416","y2":"17.997565476030104","key":"4"}),
      createElement(Line, {"x1":"19.025268549099565","y1":"16.265514668625656","x2":"20.025268549230532","y2":"14.533463861130258","key":"5"}),
      createElement(Line, {"x1":"16.025268548710301","y1":"21.461667091108211","x2":"17.025268548839449","y2":"19.729616283616451","key":"6"})),
    createElement(Line, {"x1":"10.025268548970416","y1":"12.99756547607376","x2":"12.025268548970416","y2":"12.997565476121054","key":"5"}),
    createElement(Polyline, {"points":"12.025268548970416 10.997565476121054 12.025268548970416 12.997565476121054 13.358520502099964 14.997565476121054","key":"6"})
  );
});

AccessibilitySquareSettings.displayName = 'AccessibilitySquareSettings';

export default AccessibilitySquareSettings;
export { AccessibilitySquareSettings };
