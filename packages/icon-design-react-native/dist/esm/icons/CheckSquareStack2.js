import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline, Rect } from 'react-native-svg';

const CheckSquareStack2 = forwardRef(function CheckSquareStack2(
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
    createElement(Polyline, {"points":"5.974731440090181 9.000000003874447 7.974731440090181 11.000000003874447 11.974731440090181 7.000000003874447","key":"0"}),
    createElement(Rect, {"x":"1.974731440090181","y":"2.000000003874447","width":"14","height":"14","rx":"3","ry":"3","key":"1"}),
    createElement(Path, {"d":"M8.158447260399953,20.000000003874447c.413269042969659,1.162536621090112,1.511962890629547,2,2.816284179690228,2h8c1.656860351559772,0,3-1.3431396484375,3-3v-8c0-1.304321289058862-.837463378909888-2.40301513671875-2-2.8162841796875","key":"2"})
  );
});

CheckSquareStack2.displayName = 'CheckSquareStack2';

export default CheckSquareStack2;
export { CheckSquareStack2 };
