import { createElement, forwardRef } from 'react';
import Svg, { Circle, Polygon } from 'react-native-svg';

const SunStarBig = forwardRef(function SunStarBig(
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
    createElement(Polygon, {"points":"18.999999990796823 15.000000000456566 21.999999990796823 12.000000000456566 18.999999990796823 9.000000000456566 18.999999990796823 5.000000000456566 14.999999990796823 5.000000000456566 11.999999990796823 2.000000000456566 8.999999990796823 5.000000000456566 4.999999990796823 5.000000000456566 4.999999990796823 9.000000000456566 1.999999990796823 12.000000000456566 4.999999990796823 15.000000000456566 4.999999990796823 19.000000000456566 8.999999990796823 19.000000000456566 11.999999990796823 22.000000000456566 14.999999990796823 19.000000000456566 18.999999990796823 19.000000000456566 18.999999990796823 15.000000000456566","key":"0"}),
    createElement(Circle, {"cx":"11.999999990796823","cy":"12.000000000448381","r":"5","key":"1"})
  );
});

SunStarBig.displayName = 'SunStarBig';

export default SunStarBig;
export { SunStarBig };
