import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const BrowserBan = forwardRef(function BrowserBan(
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
    createElement(Line, {"x1":"1.999999993990059","y1":"7.998779299956368","x2":"21.999999993990059","y2":"7.998779299956368","key":"1"}),
    createElement(Line, {"x1":"4.989999993989841","y1":"4.998779299956368","x2":"4.999999993990059","y2":"4.998779299956368","key":"2"}),
    createElement(Line, {"x1":"7.989999993989841","y1":"4.998779299956368","x2":"7.999999993990059","y2":"4.998779299956368","key":"3"}),
    createElement(Line, {"x1":"19.000000000709406","y1":"4.998779299956368","x2":"10.999999993990059","y2":"4.998779299956368","key":"4"}),
    createElement(Circle, {"cx":"16.999999993995516","cy":"16.998779299957505","r":"5.000000000001648","key":"5"}),
    createElement(Line, {"x1":"20.535533896509151","y1":"13.46324539060879","x2":"13.464466084620653","y2":"20.53431320243908","key":"6"})
  );
});

BrowserBan.displayName = 'BrowserBan';

export default BrowserBan;
export { BrowserBan };
