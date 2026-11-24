import { createElement, forwardRef } from 'react';
import Svg, { Ellipse, Polyline } from 'react-native-svg';

const MusicNoteFlagSquare = forwardRef(function MusicNoteFlagSquare(
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
    createElement(Ellipse, {"cx":"8","cy":"18.499999999998181","rx":"4","ry":"3.5","key":"0"}),
    createElement(Polyline, {"points":"12 6.999999999998181 20 6.999999999998181 20 1.999999999998181 12 1.999999999998181 12 17.999999999998181","key":"1"})
  );
});

MusicNoteFlagSquare.displayName = 'MusicNoteFlagSquare';

export default MusicNoteFlagSquare;
export { MusicNoteFlagSquare };
