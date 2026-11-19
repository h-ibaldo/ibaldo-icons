import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const TouchSwipeRightTwoFingersGap = forwardRef(function TouchSwipeRightTwoFingersGap(
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
    createElement(Polyline, {"points":"19.000000000129148 2.999999999865395 22 6 18.999999999869033 8.999999999865395","key":"0"}),
    createElement(Line, {"x1":"14","y1":"5.99999999963984","x2":"22","y2":"6","key":"1"}),
    createElement(Circle, {"cx":"5.999999999997272","cy":"5.99999999928059","r":"4.000000000001819","key":"2"}),
    createElement(Polyline, {"points":"19.000000000129148 14.999999999865395 22 18 18.999999999869033 20.999999999865395","key":"3"}),
    createElement(Line, {"x1":"14","y1":"17.99999999963984","x2":"22","y2":"18","key":"4"}),
    createElement(Circle, {"cx":"5.999999999997272","cy":"17.99999999928059","r":"4.000000000001819","key":"5"})
  );
});

TouchSwipeRightTwoFingersGap.displayName = 'TouchSwipeRightTwoFingersGap';

export default TouchSwipeRightTwoFingersGap;
export { TouchSwipeRightTwoFingersGap };
