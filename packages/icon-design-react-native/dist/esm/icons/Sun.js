import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const Sun = forwardRef(function Sun(
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
    createElement(Circle, {"cx":"12","cy":"12.000000005924448","r":"4","key":"0"}),
    createElement(Line, {"x1":"19","y1":"12.000000005924448","x2":"22","y2":"12.000000005924448","key":"1"}),
    createElement(Line, {"x1":"2","y1":"12.000000005924448","x2":"5","y2":"12.000000005924448","key":"2"}),
    createElement(Line, {"x1":"12","y1":"19.000000005924448","x2":"12","y2":"22.000000005924448","key":"3"}),
    createElement(Line, {"x1":"12","y1":"2.000000005924448","x2":"12","y2":"5.000000005924448","key":"4"}),
    createElement(Line, {"x1":"16.949747468419446","y1":"16.949747474114702","x2":"19.071067812019464","y2":"19.071067817634685","key":"5"}),
    createElement(Line, {"x1":"4.928932187980536","y1":"4.928932194216031","x2":"7.050252531580554","y2":"7.050252537734195","key":"6"}),
    createElement(Line, {"x1":"7.050252531798833","y1":"16.949747474343894","x2":"4.928932188289764","y2":"19.071067817945732","key":"7"}),
    createElement(Line, {"x1":"19.071067811710236","y1":"4.928932193895889","x2":"16.949747468201167","y2":"7.050252537505003","key":"8"})
  );
});

Sun.displayName = 'Sun';

export default Sun;
export { Sun };
