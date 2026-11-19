import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SunSpokeBig = forwardRef(function SunSpokeBig(
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
    createElement(Circle, {"cx":"12.000000000314685","cy":"12.000000001974058","r":"4.999999999999773","key":"0"}),
    createElement(Line, {"x1":"2.000000000314685","y1":"12.000000001524313","x2":"7.000000000314685","y2":"12.000000001749868","key":"1"}),
    createElement(Line, {"x1":"17.000000000314685","y1":"12.000000002199158","x2":"22.000000000314685","y2":"12.000000002422894","key":"2"}),
    createElement(Line, {"x1":"4.928932188611725","y1":"4.928932189946863","x2":"8.464466094463205","y2":"8.46446609596569","key":"3"}),
    createElement(Line, {"x1":"15.535533906166165","y1":"15.535533907983336","x2":"19.071067812017645","y2":"19.071067814002163","key":"4"}),
    createElement(Line, {"x1":"12.000000000312866","y1":"2.000000001973604","x2":"12.000000000318323","y2":"7.000000001973604","key":"5"}),
    createElement(Line, {"x1":"12.000000000309228","y1":"17.000000001973604","x2":"12.000000000316504","y2":"22.000000001973604","key":"6"}),
    createElement(Line, {"x1":"19.071067812023102","y1":"4.92893218995232","x2":"15.535533906164346","y2":"8.464466095963871","key":"7"}),
    createElement(Line, {"x1":"8.464466094455929","y1":"15.535533907985155","x2":"4.928932188606268","y2":"19.071067813996706","key":"8"})
  );
});

SunSpokeBig.displayName = 'SunSpokeBig';

export default SunSpokeBig;
export { SunSpokeBig };
