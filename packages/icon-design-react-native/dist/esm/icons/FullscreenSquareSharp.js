import { createElement, forwardRef } from 'react';
import Svg, { Polyline, Rect } from 'react-native-svg';

const FullscreenSquareSharp = forwardRef(function FullscreenSquareSharp(
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
    createElement(Rect, {"x":"1.99999999829015","y":"2.998782736161957","width":"20","height":"18","rx":".999999999997745","ry":".999999999997745","transform":"translate(23.999999996041961 23.997565472862306) rotate(-180)","key":"0"}),
    createElement(Polyline, {"points":"5.999999998300154 9.998782736161957 5.999999998300154 6.998782736161957 8.999999998210114 6.998782736161957","key":"1"}),
    createElement(Polyline, {"points":"14.999999998300154 6.998782736252906 17.999999998210114 6.998782736161957 17.999999998300154 9.998782736161957","key":"2"}),
    createElement(Polyline, {"points":"17.999999998300154 13.998782736161957 17.999999998300154 16.998782736161957 14.999999998390194 16.998782736161957","key":"3"}),
    createElement(Polyline, {"points":"8.999999998300154 16.998782736071007 5.999999998390194 16.998782736161957 5.999999998300154 13.998782736161957","key":"4"})
  );
});

FullscreenSquareSharp.displayName = 'FullscreenSquareSharp';

export default FullscreenSquareSharp;
export { FullscreenSquareSharp };
