import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const AdjustVertical = forwardRef(function AdjustVertical(
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
    createElement(Circle, {"cx":"11.999999990798642","cy":"16.000000000446562","r":"3","key":"0"}),
    createElement(Line, {"x1":"11.999999990798642","y1":"13.000000000446562","x2":"11.999999990798642","y2":"2.000000019906111","key":"1"}),
    createElement(Line, {"x1":"11.999999990798642","y1":"22.000000019904292","x2":"11.999999990798642","y2":"19.000000000448381","key":"2"}),
    createElement(Circle, {"cx":"5.000000000184627","cy":"8.0000000004502","r":"3","key":"3"}),
    createElement(Line, {"x1":"5.000000000184627","y1":"11.0000000004502","x2":"5.000000000184627","y2":"22.000000019901563","key":"4"}),
    createElement(Line, {"x1":"5.000000000184627","y1":"2.000000019904292","x2":"5.000000000184627","y2":"5.000000000448381","key":"5"}),
    createElement(Circle, {"cx":"18.999999990798642","cy":"8.0000000004502","r":"3","key":"6"}),
    createElement(Line, {"x1":"18.999999990798642","y1":"11.0000000004502","x2":"18.999999990798642","y2":"22.000000019901563","key":"7"}),
    createElement(Line, {"x1":"18.999999990798642","y1":"2.000000019904292","x2":"18.999999990798642","y2":"5.000000000448381","key":"8"})
  );
});

AdjustVertical.displayName = 'AdjustVertical';

export default AdjustVertical;
export { AdjustVertical };
