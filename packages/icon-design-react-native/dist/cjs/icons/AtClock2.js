'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path, Polyline } = RNSvg;

const AtClock2 = forwardRef(function AtClock2(
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
    createElement(Circle, {"cx":"7.041899011019268","cy":"7.056394887040824","r":"5.000000000000682","key":"0"}),
    createElement(Polyline, {"points":"7.041899011019268 5.056394882189124 7.041899011019268 7.056394882189124 9.041899011019268 7.056394887018541","key":"1"}),
    createElement(Path, {"d":"M9.403837487589044,14.701109237659693c.628173828121362,1.386474609375,2.016845703121362,2.355285644529431,3.638061523430224,2.355285644529431,2.209167480470569,0,4-1.790832519529431,4-4,0-1.6212158203125-.968811035148974-3.0098876953125-2.355285644529431-3.6380615234375","key":"2"}),
    createElement(Path, {"d":"M22.041899011019268,13.056394882189124c0-4.472229003904431-3.26531982421875-8.17205810546875-7.539794921869543-8.87109375","key":"3"}),
    createElement(Path, {"d":"M4.170805261019268,14.516599960314124c.69903564453125,4.27447509765625,4.398864746101026,7.539794921875,8.87109375,7.539794921875","key":"4"}),
    createElement(Path, {"d":"M22.041899011019268,13.056394882189124v1.500002499999027c0,1.38071049386599-1.119287006129525,2.499997500000973-2.499997499999154,2.499997500000973h-.000004999999874c-1.380710493860533,0-2.499997500000973-1.119287006134982-2.499997500000973-2.499997500000973v-1.500002499999027","key":"5"}),
    createElement(Line, {"x1":"13.041899011019268","y1":"22.056394887040369","x2":"18.041899011019268","y2":"22.056394887040369","key":"6"})
  );
});

AtClock2.displayName = 'AtClock2';

module.exports = AtClock2;
module.exports.AtClock2 = AtClock2;
module.exports.default = AtClock2;
