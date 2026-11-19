import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline, Rect } from 'react-native-svg';

const CheckSquareStack = forwardRef(function CheckSquareStack(
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
    createElement(Path, {"d":"M15.974731440090181,8.000000003874447h3c1.656854249489697,0,3,1.343145750510303,3,3v8c0,1.656854249493335-1.343145750510303,3-3,3h-8c-1.656854249489697,0-3-1.343145750506665-3-3v-3","key":"2"})
  );
});

CheckSquareStack.displayName = 'CheckSquareStack';

export default CheckSquareStack;
export { CheckSquareStack };
