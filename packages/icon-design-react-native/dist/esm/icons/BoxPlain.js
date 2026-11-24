import { createElement, forwardRef } from 'react';
import Svg, { Line, Polygon, Polyline } from 'react-native-svg';

const BoxPlain = forwardRef(function BoxPlain(
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
    createElement(Polygon, {"points":"12 1.999999999998181 2 6.999999999998181 2 16.999999999998181 12 21.999999999998181 22 16.999999999998181 22 6.999999999998181 12 1.999999999998181","key":"0"}),
    createElement(Polyline, {"points":"2 6.999999999998181 12 11.999999999998181 22 6.999999999998181","key":"1"}),
    createElement(Line, {"x1":"12","y1":"21.999999999998181","x2":"12","y2":"11.999999999998181","key":"2"})
  );
});

BoxPlain.displayName = 'BoxPlain';

export default BoxPlain;
export { BoxPlain };
