import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path, Polyline } from 'react-native-svg';

const AtClockTall = forwardRef(function AtClockTall(
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
    createElement(Line, {"x1":"19.000000005340553","y1":"22.000000001239641","x2":"14.000000005340553","y2":"22.000000001240551","key":"0"}),
    createElement(Path, {"d":"M17.000000005340553,14.000000001239641v1c0,1.104569499663739.895430500338989,2,2,2h1c1.104569499659192,0,2-.895430500336261,2-2v-1","key":"1"}),
    createElement(Circle, {"cx":"7.000000005340553","cy":"7.000000001231683","r":"5.000000000000341","key":"2"}),
    createElement(Path, {"d":"M11.000000005340553,13.921020509043956v.0789794921875c0,1.6568603515625,1.343139648439319,3,3,3,1.656860351569776,0,3-1.3431396484375,3-3v-4c0-1.307678222657159-.841918945310681-2.408386230469659-2.009155273430224-2.819152832032159","key":"3"}),
    createElement(Path, {"d":"M22.000000005340553,14.000000001231456v-4c0-4.418273925782159-3.581726074220569-8-8-8-.247375488280341,0-.491088867180224.0150146484375-.732727050780341.0369873046875","key":"4"}),
    createElement(Path, {"d":"M6.059936528779872,14.940063477793956c.466064453130457,3.9744873046875,3.840393066409888,7.0599365234375,7.940063476560681,7.0599365234375","key":"5"}),
    createElement(Polyline, {"points":"7.000000005340553 4.999999996379302 7.000000005340553 6.999999996379302 9.000000005340553 7.999999996379302","key":"6"})
  );
});

AtClockTall.displayName = 'AtClockTall';

export default AtClockTall;
export { AtClockTall };
