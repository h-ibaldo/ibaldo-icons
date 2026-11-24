import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SunTiny = forwardRef(function SunTiny(
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
    createElement(Line, {"x1":"12","y1":"21","x2":"12","y2":"22.000000005924448","key":"1"}),
    createElement(Line, {"x1":"12","y1":"3","x2":"12","y2":"2.000000005924448","key":"2"}),
    createElement(Line, {"x1":"3.000000005924448","y1":"12.000000005924448","x2":"2","y2":"12.000000005924448","key":"3"}),
    createElement(Line, {"x1":"21.000000005924448","y1":"12.000000005924448","x2":"22","y2":"12.000000005924448","key":"4"}),
    createElement(Line, {"x1":"5.63603897365374","y1":"18.363961032557199","x2":"4.928932188293402","y2":"19.071067817947551","key":"5"}),
    createElement(Line, {"x1":"18.363961034725435","y1":"5.636038970913432","x2":"19.071067811706598","y2":"4.928932193901346","key":"6"}),
    createElement(Line, {"x1":"5.636038973367249","y1":"5.636038979577279","x2":"4.928932187975988","y2":"4.92893219421785","key":"7"}),
    createElement(Line, {"x1":"18.363961035011016","y1":"18.363961040649883","x2":"19.071067812024012","y2":"19.071067817631047","key":"8"})
  );
});

SunTiny.displayName = 'SunTiny';

export default SunTiny;
export { SunTiny };
