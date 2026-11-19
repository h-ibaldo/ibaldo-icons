import { createElement, forwardRef } from 'react';
import Svg, { Polygon, Polyline } from 'react-native-svg';

const BurstSkewed = forwardRef(function BurstSkewed(
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
    createElement(Polygon, {"points":"9.999999981000656 11.999996563432433 21.999999981000656 7.999996563432433 21.999999981000656 17.999996563432433 9.999999981000656 21.999996563432433 9.999999981000656 11.999996563432433","key":"0"}),
    createElement(Polyline, {"points":"17.999999981000656 9.333309551713683 17.999999981000656 4.999996563432433 5.999999981000656 8.999996563432433 5.999999981000656 18.999996563432433 9.999999981000656 17.666683575151183","key":"1"}),
    createElement(Polyline, {"points":"13.999999981000656 6.333309551713683 13.999999981000656 1.999996563432433 1.999999981000656 5.999996563432433 1.999999981000656 15.999996563432433 5.999999981000656 14.666683575151183","key":"2"})
  );
});

BurstSkewed.displayName = 'BurstSkewed';

export default BurstSkewed;
export { BurstSkewed };
