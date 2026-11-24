import { createElement, forwardRef } from 'react';
import Svg, { Ellipse, Polyline } from 'react-native-svg';

const Music = forwardRef(function Music(
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
    createElement(Polyline, {"points":"9 18.999999999998181 9 3.999999999998181 22 1.999999999998181 22 16.999999999998181","key":"2"})
  );
});

Music.displayName = 'Music';

export default Music;
export { Music };
