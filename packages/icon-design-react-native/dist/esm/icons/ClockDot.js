import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path, Polyline } from 'react-native-svg';

const ClockDot = forwardRef(function ClockDot(
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
    createElement(Polyline, {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223","key":"0"}),
    createElement(Circle, {"cx":"18.5","cy":"18.499999999887223","r":"3.5","key":"1"}),
    createElement(Path, {"d":"M21.085571289060681,16.159362792857792c.581481933599207-1.267822265630457.914428710939319-2.673278808599207.914428710939319-4.159362792970569,0-5.522888183590112-4.477172851560681-10-10-10S2,6.477111816297111,2,11.999999999887223c0,5.522827148441138,4.477172851560681,10,10,10,1.486083984369543,0,2.891540527340112-.332946777340112,4.159362792970569-.914428710939319","key":"2"})
  );
});

ClockDot.displayName = 'ClockDot';

export default ClockDot;
export { ClockDot };
