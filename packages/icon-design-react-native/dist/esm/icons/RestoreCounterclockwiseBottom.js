import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path, Polyline } from 'react-native-svg';

const RestoreCounterclockwiseBottom = forwardRef(function RestoreCounterclockwiseBottom(
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
    createElement(Polyline, {"points":"20.999999981630026 21.999996563854438 20.99999998128078 16.999996563854438 15.999999981409928 16.999996564214598","key":"0"}),
    createElement(Path, {"d":"M21.999999981180736,11.999996563810782c-.000000000240107-5.5228271484375-4.477172852009971-9.999999999799911-10.000000000440195-9.999999999552529-5.522827148441138.000000000247383-9.999999999799911,4.477172852009971-9.999999999559805,10.000000000447471.000000000249202,5.52288818359375,4.477172852019066,9.999999999799911,10.00000000044929,9.999999999552529,3.69921875-.000000000167347,6.921447753820757-2.013854980777978,8.651245116969221-5.000000000389264","key":"1"}),
    createElement(Circle, {"cx":"11.999999981190285","cy":"11.999996564258254","r":"1.999999999999773","key":"2"})
  );
});

RestoreCounterclockwiseBottom.displayName = 'RestoreCounterclockwiseBottom';

export default RestoreCounterclockwiseBottom;
export { RestoreCounterclockwiseBottom };
