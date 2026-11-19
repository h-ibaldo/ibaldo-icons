import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

const ShareSquare = forwardRef(function ShareSquare(
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
    createElement(Path, {"d":"M12,1.999999999998181h-7c-1.656854249489697,0-3,1.343145750511212-3,3v14c0,1.656854249489697,1.343145750510303,3,3,3h14c1.656854249489697,0,3-1.343145750510303,3-3v-6","key":"0"}),
    createElement(Polyline, {"points":"18 1.999999999998181 22 5.999999999998181 18 9.999999999998181","key":"1"}),
    createElement(Path, {"d":"M7,16.999999999998181v-2c0-4.970562748480006,4.029437251519994-9,9-9h6","key":"2"})
  );
});

ShareSquare.displayName = 'ShareSquare';

export default ShareSquare;
export { ShareSquare };
