import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path, Polygon } from 'react-native-svg';

const BrowserCompass = forwardRef(function BrowserCompass(
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
    createElement(Line, {"x1":"2","y1":"7.999999999998181","x2":"22","y2":"7.999999999998181","key":"0"}),
    createElement(Path, {"d":"M10,21.999999999998181h-6c-1.104569499659192,0-2-.895430500335351-2-2V3.999999999998181c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499650097,0,2,.895430500338989,2,2v6","key":"1"}),
    createElement(Line, {"x1":"5.010000000000218","y1":"4.999999999998181","x2":"5.010000000000218","y2":"4.999999999998181","key":"2"}),
    createElement(Line, {"x1":"8.010000000000218","y1":"4.999999999998181","x2":"8.010000000000218","y2":"4.999999999998181","key":"3"}),
    createElement(Line, {"x1":"19","y1":"4.999999999998181","x2":"11","y2":"4.999999999998181","key":"4"}),
    createElement(Circle, {"cx":"17","cy":"16.999999999998181","r":"5","key":"5"}),
    createElement(Polygon, {"points":"15.585786437590286 18.414213562338773 16.292893218830613 16.292893218795143 18.414213562400619 15.585786437653951 17.707106781170296 17.707106781197581 15.585786437590286 18.414213562338773","key":"6"}),
    createElement(Line, {"x1":"17","y1":"12.999999999998181","x2":"17","y2":"11.999999999998181","key":"7"}),
    createElement(Line, {"x1":"17","y1":"21.999999999998181","x2":"17","y2":"20.999999999998181","key":"8"}),
    createElement(Line, {"x1":"21","y1":"16.999999999998181","x2":"22","y2":"16.999999999998181","key":"9"}),
    createElement(Line, {"x1":"12","y1":"16.999999999998181","x2":"13","y2":"16.999999999998181","key":"10"})
  );
});

BrowserCompass.displayName = 'BrowserCompass';

export default BrowserCompass;
export { BrowserCompass };
