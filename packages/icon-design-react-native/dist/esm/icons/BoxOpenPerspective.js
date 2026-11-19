import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const BoxOpenPerspective = forwardRef(function BoxOpenPerspective(
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
    createElement(Line, {"x1":"12","y1":"8.999999999998181","x2":"20","y2":"5.999999999998181","key":"0"}),
    createElement(Polyline, {"points":"12 8.999999999998181 14 12.999999999998181 22 9.999999999998181 20 5.999999999998181","key":"1"}),
    createElement(Polyline, {"points":"4 5.999999999998181 2 9.999999999998181 4 10.749999999998181","key":"2"}),
    createElement(Line, {"x1":"12","y1":"8.999999999998181","x2":"12","y2":"20.999999999998181","key":"3"}),
    createElement(Line, {"x1":"4","y1":"5.999999999998181","x2":"12","y2":"8.999999999998181","key":"4"}),
    createElement(Polyline, {"points":"20 5.999999999998181 12 2.999999999998181 4 5.999999999998181 4 17.999999999998181 12 20.999999999998181 20 17.999999999998181 20 10.749999999998181","key":"5"})
  );
});

BoxOpenPerspective.displayName = 'BoxOpenPerspective';

export default BoxOpenPerspective;
export { BoxOpenPerspective };
