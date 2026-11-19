import { createElement, forwardRef } from 'react';
import Svg, { Ellipse, Line, Polyline } from 'react-native-svg';

const MusicSixteenth = forwardRef(function MusicSixteenth(
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
    createElement(Ellipse, {"cx":"5.5","cy":"18.999999999998181","rx":"3.5","ry":"3","key":"0"}),
    createElement(Ellipse, {"cx":"18.5","cy":"16.999999999998181","rx":"3.5","ry":"3","key":"1"}),
    createElement(Polyline, {"points":"9 18.999999999998181 9 3.999999999998181 22 1.999999999998181 22 16.999999999998181","key":"2"}),
    createElement(Line, {"x1":"9","y1":"7.999999999998181","x2":"22","y2":"5.999999999998181","key":"3"})
  );
});

MusicSixteenth.displayName = 'MusicSixteenth';

export default MusicSixteenth;
export { MusicSixteenth };
