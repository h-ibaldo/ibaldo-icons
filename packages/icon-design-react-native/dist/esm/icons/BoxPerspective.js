import { createElement, forwardRef } from 'react';
import Svg, { Polygon, Polyline } from 'react-native-svg';

const BoxPerspective = forwardRef(function BoxPerspective(
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
    createElement(Polygon, {"points":"12 1.999999999998181 2 5.999999999998181 2 17.999999999998181 12 21.999999999998181 22 17.999999999998181 22 5.999999999998181 12 1.999999999998181","key":"0"}),
    createElement(Polyline, {"points":"22 5.999999999998181 12 9.999999999998181 12 21.999999999998181","key":"1"}),
    createElement(Polyline, {"points":"17 3.999999999998181 7 7.999999999998181 7 10.999999999998181","key":"2"})
  );
});

BoxPerspective.displayName = 'BoxPerspective';

export default BoxPerspective;
export { BoxPerspective };
