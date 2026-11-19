import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path, Polyline } from 'react-native-svg';

const RestoreCounterclockwise = forwardRef(function RestoreCounterclockwise(
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
    createElement(Polyline, {"points":"2.999999981189831 1.999996564258254 2.999999981318979 6.999996564258254 7.999999981189831 6.999996564123649","key":"0"}),
    createElement(Path, {"d":"M1.999999981189831,11.999996564258254c0,5.5228271484375,4.477172851560681,10,10,10,5.522827148430224,0,10-4.4771728515625,10-10,0-5.52288818359375-4.477172851569776-10-10-10-3.69921875,0-6.921447753909888,2.01385498046875-8.651245117189319,5","key":"1"}),
    createElement(Circle, {"cx":"11.999999981180736","cy":"11.999996564258254","r":"2","key":"2"})
  );
});

RestoreCounterclockwise.displayName = 'RestoreCounterclockwise';

export default RestoreCounterclockwise;
export { RestoreCounterclockwise };
