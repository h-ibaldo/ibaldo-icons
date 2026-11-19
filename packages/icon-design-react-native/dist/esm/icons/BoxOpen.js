import { createElement, forwardRef } from 'react';
import Svg, { Line, Polygon, Polyline } from 'react-native-svg';

const BoxOpen = forwardRef(function BoxOpen(
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
    createElement(Polygon, {"points":"14 13.999999999998181 22 10.999999999998181 20 5.999999999998181 12 8.999999999998181 14 13.999999999998181","key":"0"}),
    createElement(Polyline, {"points":"12 20.999999999998181 20 17.999999999998181 20 11.749999999998181","key":"1"}),
    createElement(Line, {"x1":"20","y1":"5.999999999998181","x2":"12","y2":"2.999999999998181","key":"2"}),
    createElement(Polygon, {"points":"10.000000000130058 13.999999999869033 2 11.000000000218279 3.999999999779902 6.000000000138243 11.99999999990996 8.999999999778083 10.000000000130058 13.999999999869033","key":"3"}),
    createElement(Polyline, {"points":"12.0000000004502 20.999999999778083 4.000000000310138 18.000000000138243 4.000000000030013 11.750000000138243","key":"4"}),
    createElement(Line, {"x1":"3.999999999779902","y1":"6.000000000138243","x2":"11.99999999963984","y2":"2.999999999778083","key":"5"})
  );
});

BoxOpen.displayName = 'BoxOpen';

export default BoxOpen;
export { BoxOpen };
