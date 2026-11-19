'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path, Polyline } = RNSvg;

const AtClock = forwardRef(function AtClock(
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
    createElement(Circle, {"cx":"7.067167566010539","cy":"7.056394887051738","r":"5.000000000000682","key":"0"}),
    createElement(Polyline, {"points":"7.067167566010539 5.056394882200038 7.067167566010539 7.056394882200038 9.067167566010539 8.056394882200038","key":"1"}),
    createElement(Path, {"d":"M9.429106042580315,14.701109237670607c.628173828119543,1.386474609375,2.016845703119543,2.355285644529431,3.638061523430224,2.355285644529431,2.20916748046875,0,4-1.790832519529431,4-4,0-1.6212158203125-.968811035150793-3.0098876953125-2.35528564453125-3.6380615234375","key":"2"}),
    createElement(Path, {"d":"M22.067167566010539,13.056394882200038c0-4.472229003904431-3.265319824220569-8.17205810546875-7.539794921869543-8.87109375","key":"3"}),
    createElement(Path, {"d":"M4.196073816010539,14.516599960325038c.699035644529431,4.27447509765625,4.398864746099207,7.539794921875,8.87109375,7.539794921875","key":"4"}),
    createElement(Path, {"d":"M22.067167566010539,13.056394882200038v1.500002499999027c0,1.38071049386599-1.119287006129525,2.499997500000973-2.499997500000973,2.499997500000973h-.000004999999874c-1.380710493858714,0-2.499997499999154-1.119287006134982-2.499997499999154-2.499997500000973v-1.500002499999027","key":"5"}),
    createElement(Line, {"x1":"13.067167566010539","y1":"22.056394887051283","x2":"18.067167566010539","y2":"22.056394887051283","key":"6"})
  );
});

AtClock.displayName = 'AtClock';

module.exports = AtClock;
module.exports.AtClock = AtClock;
module.exports.default = AtClock;
